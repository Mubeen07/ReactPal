import {accountTypes} from './accountTypes';

const INITIAL_STATE = {
  phoneNo: '',
  loading: false,
};

export default (state, action) => {
  if (!state) {
    state = INITIAL_STATE;
  }

  switch (action.type) {
    case accountTypes.EMAIL_ONCHANGE:
      return {
        ...state,
        phoneNo: action.payload,
      };
    case accountTypes.FIELD_ONCHANGE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value,
      };
    default:
      return state;
  }
};
