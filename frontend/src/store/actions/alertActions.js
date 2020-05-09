import { SUCCESS, ERROR, CLEAR } from "../actions/types";

export const alertActions = {
  success,
  error,
  clear,
};

function success(message) {
  return { type: SUCCESS, message };
}
function error(message) {
  return { type: ERROR, message };
}
function clear(message) {
  return { type: SUCCESS };
}
