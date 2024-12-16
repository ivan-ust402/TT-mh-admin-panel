import { call, put, takeLeading } from 'redux-saga/effects';
import { handleResponseError } from 'src/utils/error';
import { AxiosResponse } from 'axios';
import { makeDelay } from 'src/api';
import { GET_TAG_DETAILS_REQUEST, getTagDetailsFailure, GetTagDetailsRequestAction, getTagDetailsSuccess } from './tagActions';
import { getTag, TagDetails } from 'src/api/tagApi';

function* getTagDetailsSaga(action: GetTagDetailsRequestAction) {
  try {
    const response: AxiosResponse<TagDetails> = yield call(getTag, action.payload)
    yield makeDelay(300)
    yield put(getTagDetailsSuccess(response.data))
  } catch (error) {
    const errorMessage = handleResponseError(error, '')
    yield put(getTagDetailsFailure(errorMessage))
  }
}

export function* tagDetailsWatcher() {
  yield takeLeading(GET_TAG_DETAILS_REQUEST, getTagDetailsSaga)
}