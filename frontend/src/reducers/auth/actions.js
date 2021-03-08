import { Dispatch } from "redux";
// import { restClient } from "../../../restClient";
// import { makeRequest } from "../../../utils/action-utils";
import { actionTypes } from "./actionTypes";

export const authActions = { login, logout };

function login(username, password) {
  const types = {
    request: actionTypes.REQUEST,
    success: actionTypes.SUCCESS,
    failure: actionTypes.FAILURE,
  };
  return makeRequest(() => restClient.login(username, password), types);
}

function logout(error) {
  return async function (dispatch) {
    dispatch({ type: actionTypes.LOGOUT, error });
  };
}



