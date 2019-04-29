import * as actionTypes from "./actionTypes";

export const authLoginRequest = (username, password) => ({
  type: actionTypes.AUTH_LOGIN_REQUEST,
  payload: {
    username,
    password
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
});

export const authLoginReceive = json => ({
  type: actionTypes.AUTH_LOGIN_RECEIVE,
  payload: {
    ...json
  }
});

export const authLoginFailed = error => ({
  type: actionTypes.AUTH_LOGIN_FAILED,
  error
});

export const authVerifyRequest = () => ({
  type: actionTypes.AUTH_VERIFY_REQUEST
});

export const authLogoutRequest = token => ({
  type: actionTypes.AUTH_LOGOUT_REQUEST,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token
  }
});

export const authLogoutReceive = json => ({
  type: actionTypes.AUTH_LOGOUT_RECEIVE,
  json
});

export const authLogoutFailed = error => ({
  type: actionTypes.AUTH_LOGOUT_FAILED,
  error
});

export const authRegisterRequest = (username, password, email, permission) => ({
  type: actionTypes.AUTH_REGISTER_REQUEST,
  payload: {
    username,
    password,
    email,
    permission
  },
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
});

export const authRegisterReceive = json => ({
  type: actionTypes.AUTH_REGISTER_RECEIVE,
  payload: {
    ...json
  }
});

export const authRegisterFailed = error => ({
  type: actionTypes.AUTH_REGISTER_FAILED,
  error
});

export default {
  authLoginRequest,
  authLoginReceive,
  authLoginFailed,

  authRegisterRequest,
  authRegisterReceive,
  authRegisterFailed,

  authLogoutRequest,
  authLogoutReceive,
  authLogoutFailed,

  authVerifyRequest
};
