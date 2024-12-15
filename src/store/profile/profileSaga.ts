import { getProfile, GetProfileResponse } from 'src/api/profileApi';
import { GET_PROFILE_REQUEST, getProfileFailure, getProfileSuccess } from './profileActions';
import { call, put, takeLeading } from 'redux-saga/effects';
import { makeDelay } from 'src/api';
import { AxiosResponse } from 'axios';
import { handleResponseError } from 'src/utils/error';
// import { getPosts, GetPostsResponse } from 'src/api/postsApi';


function* getProfileSaga() {
  try {
    const response: AxiosResponse<GetProfileResponse> = yield call(getProfile)

    // Искусственная задерка для отображения состояния loading
    yield makeDelay(500)

    yield put(getProfileSuccess(response.data))
  } catch (error) {
    const message = handleResponseError(error, 'Profile request failed')
    yield put(getProfileFailure(message))
  }
}


export function* profileWatcher() {
  yield takeLeading(GET_PROFILE_REQUEST, getProfileSaga);
}