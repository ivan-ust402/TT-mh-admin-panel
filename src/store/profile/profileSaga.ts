import { getProfile, GetProfileResponse } from 'src/api/profileApi';
import { GET_PROFILE_REQUEST, getProfileFailure, getProfileSuccess } from './profileActions';
import { call, put, takeLeading } from 'redux-saga/effects';
import { makeDelay } from 'src/api';


function* getProfileSaga() {
  try {
    const response: GetProfileResponse = yield call(getProfile)
    // Искусственная задерка для отображения состояния loading
    yield makeDelay(500)
    yield put(getProfileSuccess(response))
  } catch (error: any) {
    yield put(getProfileFailure(error.message || 'Profile data failed'))
  }
}


export function* profileWatcher() {
  yield takeLeading(GET_PROFILE_REQUEST, getProfileSaga);
}