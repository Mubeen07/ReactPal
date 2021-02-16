import axios from "axios";
// import {endpoints} from '../../config/apiConfig';
// import storageHelper from '../../helpers/storageHelper';

// BaseURL
const url = "http://35.239.245.88:3021/";

async function getOffers() {
  return axios
    .get(`${url}${"plans"}`)
    .then((response) => {
      if (response.status === 400) {
        return { data: { success: false, message: "Request is not valid" } };
      }
      return response;
    })
    .catch((error) => {
      return error.response;
    });
}

// async function persistCurrentUser(response) {
//   const currentUser = {
//     authToken: response.data.data.access_token,
//     userId: response.data.data.user.entryuuid[0],
//     rocketToken: response.data.data.rocket_chat_auth_token,
//     rocketUserId: response.data.data.rocket_chat_user_id,
//     email: response.data.data.user.mail[0],
//     name: response.data.data.user.givenname[0],
//     userName: response.data.data.user.cn[0],
//     password: response.data.data.user.userpassword[0],
//     dn: response.data.data.user.dn[0],
//     cred: response.cred,
//   };
//   storageHelper.setCurrentUser(currentUser);
// }

export const accountApi = {
  postOTP,
  getOffers,
};
