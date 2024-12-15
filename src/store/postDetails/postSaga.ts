import { call, put, takeLeading } from 'redux-saga/effects';
import { handleResponseError } from 'src/utils/error';
import { GET_POST_DETAILS_REQUEST, getPostDetailsFailure, GetPostDetailsRequestAction, getPostDetailsSuccess } from './postActions';
import { AxiosResponse } from 'axios';
import { getPost, PostDetails } from 'src/api/postApi';
import { makeDelay } from 'src/api';

function* getPostDetailsSaga(action: GetPostDetailsRequestAction) {
  try {
    const response: AxiosResponse<PostDetails> = yield call(getPost, action.payload)
    yield makeDelay(300)
    yield put(getPostDetailsSuccess(response.data))
  } catch (error) {
    const errorMessage = handleResponseError(error, '')
    yield put(getPostDetailsFailure(errorMessage))
  }
}

export function* postDetailsWatcher() {
  yield takeLeading(GET_POST_DETAILS_REQUEST, getPostDetailsSaga)
}