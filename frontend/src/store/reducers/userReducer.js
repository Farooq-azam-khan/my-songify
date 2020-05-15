import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/types";

const initial_state = {
  logged_in: false,
  user_data: {},
  // access_token: '',
  // refresh_token: ''
};

const userReducer = (state = initial_state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        logged_in: true,
        user_data: action.payload.user,
        // access_token: action.payload.access_token,
        // refresh_token: action.payload.refresh_token
      };
    case LOGIN_FAILURE:
      return initial_state;
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logged_in: false,
        user_data: {},
      };

    default:
      return state;
  }
};
export default userReducer;
