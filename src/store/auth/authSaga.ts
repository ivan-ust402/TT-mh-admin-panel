import { call, put, takeLeading } from "redux-saga/effects";

import { loginSuccess, loginFailure, LOGIN_REQUEST, AuthActionTypes, LOGOUT_REQUEST, logoutSuccess, logoutFailure } from "./authActions";
import { login, LoginResponse } from "src/api/authApi";

function* loginSaga(action: AuthActionTypes) {
  if (action.type !== LOGIN_REQUEST) return;
  try {
    const response: LoginResponse = yield call(login, action.payload);
    document.cookie = `access_token = ${response.access_token}`
    document.cookie = `access_expired_at = ${response.access_expired_at}`
    document.cookie = `refresh_token = ${response.refresh_token}`
    document.cookie = `refresh_expired_at = ${response.refresh_expired_at}`
    yield put(loginSuccess());
  } catch (error: any) {
    yield put(loginFailure(error.message || "Login failed"));
  }
}

function* logoutSaga(action: AuthActionTypes) {
  if (action.type !== LOGOUT_REQUEST) return;
  try {
    document.cookie = 'access_token = ';
    document.cookie = `access_expired_at = `
    document.cookie = `refresh_token = `
    document.cookie = `refresh_expired_at = `
    yield put(logoutSuccess());
  } catch (error: any) {
    yield put(logoutFailure(error.message || "Logout failed")); 
  }
}

export function* authWatcher() {
  yield takeLeading(LOGIN_REQUEST, loginSaga);
  yield takeLeading(LOGOUT_REQUEST, logoutSaga);
}