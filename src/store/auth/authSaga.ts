import { call, put, takeLeading } from 'redux-saga/effects';

import { loginSuccess, loginFailure, LOGIN_REQUEST, LOGOUT_REQUEST, logoutSuccess, LoginRequestAction, logoutFailure } from './authActions';
import { login, LoginResponse } from 'src/api/authApi';
import { setAuthCookies } from 'src/utils/cookies';
import { handleResponseError } from 'src/utils/error';
import { makeDelay } from 'src/api';

function* loginSaga(action: LoginRequestAction) {
  try {
    const response: LoginResponse = yield call(login, action.payload);
    setAuthCookies(response)
    yield makeDelay(500)
    yield put(loginSuccess());
  }
  catch (error) {
    const message = handleResponseError(error, 'Login Failed')
    yield put(loginFailure(message))
  }
}

function* logoutSaga() {
  try {
    setAuthCookies()
    yield put(logoutSuccess());
  } catch (error) {
    const message = handleResponseError(error, 'Logout Failed')
    yield put(logoutFailure(message))
  }
}

export function* authWatcher() {
  yield takeLeading(LOGIN_REQUEST, loginSaga);
  yield takeLeading(LOGOUT_REQUEST, logoutSaga);
}