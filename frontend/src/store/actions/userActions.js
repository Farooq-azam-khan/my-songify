import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS } from './types';

import getFormData from './../../getFormData';
import BASE_URL from '../../base_url';

export const logout_user = () => {
  return (dispatch) => {
    console.log('logout action');
    fetch(`${BASE_URL}/users/logout`, {
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
      }).catch(e => {
        dispatch({
          type: LOGOUT_SUCCESS,
        });
      });
  };
};

// TODO: maybe implement with jwt later 
export const login_user = (email, password) => {
  return (dispatch) => {
    fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      // headers: {
      //   "Content-Type": "application/json"
      // },
      body: getFormData({ email, password })
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.success) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: data,
          });
        } else {
          dispatch({
            type: LOGIN_FAILURE,
            payload: data,
          });
        }
      }).catch(e => {
        dispatch({
          type: LOGIN_FAILURE,
        });
      });
  };
};
