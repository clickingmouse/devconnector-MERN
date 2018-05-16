import { TEST_DISPATCH } from "./types";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import jwt_decode from "jwt-decode";
//REgiste rusr

//wait for async response before dispatch

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    //redirect if successful
    //      .catch(err => console.log(err.response.data));
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
  //      .catch(err => this.setState({ errors: err.response.data }));

  //??????????
  return {
    type: TEST_DISPATCH,
    payload: userData
  };
};

//login - Get user Token,

export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      //savve to local storage
      const { token } = res.data;
      //set token to LS
      localStorage.setItem("jwtToken", token);
      //set token to auth heaader
      setAuthToken(token);
      //decode token to get user Data
      const decoded = jwt_decode(token);
      //set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = () => dispatch => {
  //Remove token from local Storage
  localStorage.removeItem("jwtToken");
  //remove auth header for future requests

  setAuthToken(false);
  //set curent user to {} which will also set isAuthenticated to falst

  dispatch(setCurrentUser({}));
};
