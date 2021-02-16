import axios from "axios";
import { accountTypes } from "./accountTypes";
import { accountApi } from "./accountApi";
import { showErrorToast, showSuccessToast } from "../../utils/Toaster";

const onChange = (stateName, value) => async (dispatch) => {
  dispatch({
    type: accountTypes.FIELD_ONCHANGE,
    payload: { prop: stateName, value: value },
  });
};

const onSignIn = (phoneNo, navigation) => async (dispatch) => {
  dispatch({
    type: accountTypes.FIELD_ONCHANGE,
    payload: { prop: "loading", value: true },
  });
  const data = await accountApi.postOTP(phoneNo);
  dispatch({
    type: accountTypes.FIELD_ONCHANGE,
    payload: { prop: "loading", value: false },
  });
  if (data.status == 201) {
    navigation.navigate("PhoneNoVerification");
  } else {
    showErrorToast({ message: "Invalid credentials!" });
  }
};

const onCodeSubmit = (phoneNo, code, navigation) => async (dispatch) => {
  dispatch({
    type: accountTypes.FIELD_ONCHANGE,
    payload: { prop: "loading", value: true },
  });
  const data = await accountApi.codeSubmit({ phoneNo: phoneNo, code: code });
  dispatch({
    type: accountTypes.FIELD_ONCHANGE,
    payload: { prop: "loading", value: false },
  });
  if (data.status == 201) {
    // navigation.navigate("ExplainerVideo");
  } else if (data.status == 401) {
    showErrorToast({ message: data.data.message });
  } else {
    showErrorToast({ message: data.data.message || "Please try again later!" });
  }

  // Temporary navigation;
  navigation.navigate("ExplainerVideo");
};

const onSendBillPhoto = ({ billPhotos, navigation }) => async (dispatch) => {
  dispatch({
    type: accountTypes.FIELD_ONCHANGE,
    payload: { prop: "loading", value: true },
  });
  const data = await accountApi.postBillPhotos({ billPhotos });
  dispatch({
    type: accountTypes.FIELD_ONCHANGE,
    payload: { prop: "loading", value: false },
  });
  if (data.status == 200) {
    const offersPayload = data.data[0];
    dispatch({
      type: accountTypes.FIELD_ONCHANGE,
      payload: { prop: "offersPayload", value: offersPayload },
    });
    navigation.pop(1);
    navigation.navigate("CapturedBillsPlan");
  } else {
    showErrorToast({ message: "Somthing went wrong!" });
  }
};

const onGetOffers = (navigation) => async (dispatch) => {
  const data = await accountApi.getOffers();

  if (data.status == 200) {
    const offersPayload = data.data[0];
    dispatch({
      type: accountTypes.FIELD_ONCHANGE,
      payload: { prop: "offersPayload", value: offersPayload },
    });
    navigation.pop(1);
    navigation.navigate("TangoSlider");
  }
};

const onSendIDPhoto = ({ idCardType, idPhoto, navigation }) => async (dispatch) => {
  dispatch({
    type: accountTypes.FIELD_ONCHANGE,
    payload: { prop: "loading", value: true },
  });
  const data = await accountApi.postIDPhoto({ idCardType, idPhoto });
  dispatch({
    type: accountTypes.FIELD_ONCHANGE,
    payload: { prop: "loading", value: false },
  });
  if (data.status == 200) {
    if(data.data.message && data.data.message == 'data from image not found') {
      dispatch({
        type: accountTypes.FIELD_ONCHANGE,
        payload: { prop: "identityPayload", value: { idCardType: idCardType } },
      });
      navigation.pop(1);
      showErrorToast({ message: "Please select valid ID" });
      // Just for the time being
      navigation.navigate(idCardType == "creditcard" ? "EnterEmail" : "UserDetailScreen");
    } else {
      const identityPayload = data.data;
      dispatch({
        type: accountTypes.FIELD_ONCHANGE,
        payload: { prop: "identityPayload", value: { ...identityPayload, idCardType: idCardType } },
      });
      navigation.pop(1);
      navigation.navigate(idCardType == "creditcard" ? "EnterEmail" : "UserDetailScreen");
    }
  } else {
    navigation.goBack();
    showErrorToast({ message: "Somthing went wrong!" });
  }
};

const onPostCCDetail = ({ idCardType, idPhoto, cvcNumber, navigation }) => async (dispatch) => {
  dispatch({
    type: accountTypes.FIELD_ONCHANGE,
    payload: { prop: "loading", value: true },
  });
  const data = await accountApi.postIDPhoto({ idCardType, idPhoto });
  dispatch({
    type: accountTypes.FIELD_ONCHANGE,
    payload: { prop: "loading", value: false },
  });
  if (data.status == 200) {
    if(data.data.message && data.data.message == 'data from image not found') {
      navigation.pop(1);
      showErrorToast({ message: "Please select valid ID" });
      // Just for the time being
      navigation.navigate(idCardType == "creditcard" ? "EnterEmail" : "UserDetailScreen");
    } else {
      const identityPayload = data.data;
      if(idCardType == "creditcard") {
        // Create stripe token
        const STRIPE_PUBLISHABLE_KEY = 'pk_test_51HzFRrG0uYg7Zho622rQnLc1pkBj1bXZMbUUGvdq5IdXEZvMBfwUt8lVfBWO4ZDZUKhBNXyd6f40qdpjJP36b9QT00hYebLZOc';
        const card = {
          number: '4242424242424242' || identityPayload.cardNumber.replace(/ /g, ''),
          exp_month: identityPayload.dateOfExpiry ? identityPayload.dateOfExpiry.split('/')[0] : '3',
          exp_year: identityPayload.dateOfExpiry ? identityPayload.dateOfExpiry.split('/')[1] : '21',
          cvc: cvcNumber || `123`
        };
        // const queryTypeData = Object.keys(card)
        // .map(key => key + '=' + card[key])
        // .join('&')
        const cardDetail = `?card[number]=${card.number}&card[exp_month]=${card.exp_month}&card[exp_year]=${card.exp_year}&card[cvc]=${card.cvc}`;
        axios({
          method: 'post',
          url: `https://api.stripe.com/v1/tokens${cardDetail}`,
          headers: {
            Accept: 'application/json',
            "Content-Type": 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${STRIPE_PUBLISHABLE_KEY}`
          }
        }).then((tokkenRes) => {
          dispatch({
            type: accountTypes.FIELD_ONCHANGE,
            payload: { prop: "identityPayload", value: identityPayload },
          });
          navigation.pop(1);
          navigation.navigate("EnterEmail", {
            fromRoute: 'CVVNumberView',
            stripeTokken: tokkenRes.data
          });
        }).catch(ex => {
          navigation.pop(1);
          showErrorToast({ message: ex.response.status === 402 ? ex.response.data.error.message : "Somthing went wrong!" });
        })
      } else {
        navigation.pop(1);
        showErrorToast({ message: "Please select valid ID" });
      }
    }
  } else {
    navigation.pop(1);
    showErrorToast({ message: "Somthing went wrong!" });
  }
};

const onPlanSubmit = ({ data, stripeCustomerToken, navigation }) => async (dispatch) => {
  dispatch({
    type: accountTypes.FIELD_ONCHANGE,
    payload: { prop: "loading", value: true },
  });
  const STRIPE_SECRET_KEY = `sk_test_51HzFRrG0uYg7Zho6PRZy9ZD4dGSBsRCM2osk8XjsoKEGCBxpJrEqjsWErjnwclxSZc6RTW7ZKo0sF09GH5vBaPL600XaRSmQc4`;
  const customerData = `?source=${stripeCustomerToken}&email=${data.email}&name=${data.name}&phone=${data.phoneNumber}&address[line1]=${data.connectionAddress.street}&address[line2]=${data.connectionAddress.sburb}&address[state]=${data.connectionAddress.state}&address[postal_code]=${data.connectionAddress.postalCode}&address[country]=${data.connectionAddress.country}`;
  axios({
    method: 'post',
    url: `https://api.stripe.com/v1/customers${customerData}`,
    headers: {
      Accept: 'application/json',
      "Content-Type": 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${STRIPE_SECRET_KEY}`
    }
  }).then((cres) => {
    const subscriptionData = `?customer=${cres.data.id}&items[0][price]=price_1HzQppG0uYg7Zho6Hg2DnJ2d`;
    axios({
      method: 'post',
      url: `https://api.stripe.com/v1/subscriptions${subscriptionData}`,
      headers: {
        Accept: 'application/json',
        "Content-Type": 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${STRIPE_SECRET_KEY}`
      }
    }).then(async (sres) => {
      showSuccessToast("Plan Subscribed successfuly");
      const response = await accountApi.planSubmit({ data });
      dispatch({
        type: accountTypes.FIELD_ONCHANGE,
        payload: { prop: "loading", value: false },
      });      
      if (response.status == 201) {
        // navigation.navigate("SignedUp");
      } else if (response.status == 401) {
        showErrorToast({ message: response.data.message });
      } else {
        showErrorToast({ message: response.data.message || "Please try again later!" });
      }
      // Temporary navigation;
      navigation.navigate("SignedUp");
    }).catch((serror) => {
      navigation.navigate("SignedUp");
      showErrorToast({ message: "Somthing went wrong!" });
    });
  }).catch((cerror) => {
    showErrorToast({ message: "Please try again later!" });
  });
};

export const accountActions = {
  onChange: onChange,
  onSignIn: onSignIn,
  onGetOffers: onGetOffers,
};
