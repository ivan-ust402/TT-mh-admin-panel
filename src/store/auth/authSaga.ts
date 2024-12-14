import { call, put, takeLeading } from 'redux-saga/effects';

import { loginSuccess, loginFailure, LOGIN_REQUEST, LOGOUT_REQUEST, logoutSuccess, LoginRequestAction, logoutFailure } from './authActions';
import { login, LoginResponse } from 'src/api/authApi';
import { setAuthCookies } from 'src/utils/cookies';
import { handleSagaError } from 'src/utils/error';

function* loginSaga(action: LoginRequestAction) {
  try {
    const response: LoginResponse = yield call(login, action.payload);
    setAuthCookies(response)
    yield put(loginSuccess());
  }
  catch (error) {
    const message = handleSagaError(error, 'Login Failed')
    yield put(loginFailure(message))
  }
}

function* logoutSaga() {
  try {
    setAuthCookies()
    yield put(logoutSuccess());
  } catch (error) {
    const message = handleSagaError(error, 'Logout Failed')
    yield put(logoutFailure(message))
  }
}

export function* authWatcher() {
  yield takeLeading(LOGIN_REQUEST, loginSaga);
  yield takeLeading(LOGOUT_REQUEST, logoutSaga);
}