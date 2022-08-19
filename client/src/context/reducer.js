import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: 'danger',
        alertText: 'Please provide all values!',
      };
    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: '',
        alertText: '',
      };
    case REGISTER_USER_BEGIN:
      return {
        ...state,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
      };

    default:
      throw new Error(`no such action : ${action.type}`);
  }
};

export default reducer;
