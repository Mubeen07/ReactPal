// import Toast from 'react-native-root-toast';
import {Toast} from 'native-base';

function showToast({message, type = 'warning'}) {
  Toast.show({
    text: message,
    duration: 3000,
    position: 'bottom',
    type: type,
    textStyle: {
      fontSize: 12,
      alignSelf: 'center',
    },
    style: {
      // minWidth: 500,
      alignSelf: 'center',
    },
  });
}

function showSuccessToast({message = 'This is a success message'}) {
  showToast({message, type: 'success'});
}

function showErrorToast({message = 'This is a error message'}) {
  showToast({message, type: 'danger'});
}

export {showToast, showSuccessToast, showErrorToast};
