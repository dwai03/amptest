import { actionTypes } from "./actionTypes";


const INITIAL_STATE = {
  authenticated: false,
};

export default function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.REQUEST:
      return { loading: true, authenticated: false };
    case actionTypes.FAILURE:
      return {
        authenticated: false,
        error: action.error?.message,
      };
    case actionTypes.TEMP_LOGIN: 
    case actionTypes.SUCCESS:
      return { authenticated: true, token: "abc" };
    case actionTypes.TEMP_LOGOUT:
    case actionTypes.LOGOUT:
      return { authenticated: false, error: action.error };
  }
  return state;
}
