import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS } from './types';

import getFormData from './../../getFormData';

export const logout_user = () => {
  return (dispatch) => {
    console.log('logout action');
    fetch('users/logout', {
      method: 'POST',
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('logout data');
        if (data.success) {
          dispatch({
            type: LOGOUT_SUCCESS,
          });
        }
      });
  };
};
export const login_user = (email, password) => {
  return (dispatch) => {
    fetch('users/login', {
      method: 'POST',
      body: getFormData({ email, password }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.success) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user,
          });
        } else {
          dispatch({
            type: LOGIN_FAILURE,
            payload: data.user,
          });
        }
      });
  };
};
