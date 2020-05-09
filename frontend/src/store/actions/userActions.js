import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./types";

import getFormData from "./../../getFormData";

// export const is_user_logged_in = () => {
//   return (dispatch) => {
//     fetch("users/current_user", { method: "POST" })
//       .then((resp) => resp.json())
//       .then((data) => {
//         if (data.success) {
//           dispatch({
//             type: LOGIN_SUCCESS,
//             payload: data.user,
//           });
//         }
//       });
//   };
// };
export const login_user = (email, password) => {
  return (dispatch) => {
    fetch("users/login", {
      method: "POST",
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
