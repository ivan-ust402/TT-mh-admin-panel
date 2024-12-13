import { getProfile, GetProfileResponse } from "src/api/profileApi";
import { GET_PROFILE_REQUEST, getProfileFailure, GetProfileRequestAction, getProfileSuccess } from "./profileActions";
import { call, put, takeLeading } from "redux-saga/effects";
import { makeDelay } from "src/api";


function* profileSaga(action: GetProfileRequestAction) {
  try {
    const response: GetProfileResponse = yield call(getProfile)
    yield makeDelay(500)
    yield put(getProfileSuccess(response))
  } catch (error: any) {
    yield put(getProfileFailure(error.message || "Profile data failed"))
  }
}


export function* profileWatcher() {
  yield takeLeading(GET_PROFILE_REQUEST, profileSaga);
}