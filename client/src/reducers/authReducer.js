import { TEST_DISPATCH, SET_CURRENT_USER } from "../actions/types";
import { GET_ERRORS } from "../actions/types";

import isEmpty from "../validation/is-empty";
const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    //case SET_CURRENT_USER:
    /*
    case TEST_DISPATCH:
      return {
        ...state,
        user: action.payload
      };
      */
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
