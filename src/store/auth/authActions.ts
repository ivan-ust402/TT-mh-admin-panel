export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: Credentials;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string;
}

export interface LogoutRequestAction {
  type: typeof LOGOUT_REQUEST;
}

export interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
}

export interface LogoutFailureAction {
  type: typeof LOGOUT_FAILURE;
  payload: string
}


export type AuthActionTypes = LoginRequestAction | LoginSuccessAction | LoginFailureAction | LogoutRequestAction | LogoutSuccessAction | LogoutFailureAction;

export interface Credentials {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

export const loginRequest = (credentials: Credentials): LoginRequestAction => ({
  type: LOGIN_REQUEST,
  payload: credentials,
});

export const loginSuccess = (): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = (error: string): LoginFailureAction => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logoutRequest = (): LogoutRequestAction => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = (): LogoutSuccessAction => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFailure = (error: string): LogoutFailureAction => ({
  type: LOGOUT_FAILURE,
  payload: error,
});