import { actionTypes } from "./actionTypes";


const INITIAL_STATE = {
  authenticated: true,
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.TEMP_LOGIN: 
      return { authenticated: true, token: "abc" };
    case actionTypes.TEMP_LOGOUT:
      return { authenticated: false, token: "" };
  }
  return state;
}
