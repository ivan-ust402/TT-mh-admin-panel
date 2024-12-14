import { getProfile, GetProfileResponse } from 'src/api/profileApi';
import { GET_PROFILE_REQUEST, getProfileFailure, getProfileSuccess } from './profileActions';
import { call, put, takeLeading } from 'redux-saga/effects';
import { makeDelay } from 'src/api';
import { AxiosResponse } from 'axios';
import { handleSagaError } from 'src/utils/error';
// import { getPosts, GetPostsResponse } from 'src/api/postsApi';


function* getProfileSaga() {
  try {
    const response: AxiosResponse<GetProfileResponse> = yield call(getProfile)
    // const response: AxiosResponse<GetPostsResponse> = yield call(getPosts, 1)
    // Искусственная задерка для отображения состояния loading
    yield makeDelay(500)
    // console.log(response.headers['x-pagination-page-count'])
    // const count: string = response.headers['x-pagination-page-count']
    yield put(getProfileSuccess(response.data))
  } catch (error) {
    const message = handleSagaError(error, 'Getting profile object failed')
    yield put(getProfileFailure(message))
  }
}


export function* profileWatcher() {
  yield takeLeading(GET_PROFILE_REQUEST, getProfileSaga);
}