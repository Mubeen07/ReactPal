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

export const accountActions = {
  onChange: onChange,
  onSignIn: onSignIn,
  onGetOffers: onGetOffers,
};
