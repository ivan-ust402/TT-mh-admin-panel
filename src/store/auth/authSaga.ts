import { call, put, takeLeading } from "redux-saga/effects";

import { loginSuccess, loginFailure, LOGIN_REQUEST, LOGOUT_REQUEST, logoutSuccess, logoutFailure, LoginRequestAction, LogoutRequestAction } from "./authActions";
import { login, LoginResponse } from "src/api/authApi";
import { setAuthCookies } from "src/utils/cookies";

function* loginSaga(action: LoginRequestAction) {
  try {
    const response: LoginResponse = yield call(login, action.payload);
    setAuthCookies(response)
    yield put(loginSuccess());
  } catch (error: any) {
    yield put(loginFailure(error.message || "Login failed"));
  }
} 

function* logoutSaga(action: LogoutRequestAction) {
  try {
    setAuthCookies()
    yield put(logoutSuccess());
  } catch (error: any) {
    yield put(logoutFailure(error.message || "Logout failed")); 
  }
}

export function* authWatcher() {
  yield takeLeading(LOGIN_REQUEST, loginSaga);
  yield takeLeading(LOGOUT_REQUEST, logoutSaga);
}