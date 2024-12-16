import { call, put, takeLeading } from 'redux-saga/effects';
import { handleResponseError } from 'src/utils/error';
import { GET_AUTHOR_DETAILS_REQUEST, getAuthorDetailsFailure, GetAuthorDetailsRequestAction, getAuthorDetailsSuccess } from './authorActions';
import { AxiosResponse } from 'axios';
import { makeDelay } from 'src/api';
import { AuthorDetails, getAuthor } from 'src/api/authorApi';

function* getAuthorDetailsSaga(action: GetAuthorDetailsRequestAction) {
  try {
    const response: AxiosResponse<AuthorDetails> = yield call(getAuthor, action.payload)
    yield makeDelay(300)
    yield put(getAuthorDetailsSuccess(response.data))
  } catch (error) {
    const errorMessage = handleResponseError(error, '')
    yield put(getAuthorDetailsFailure(errorMessage))
  }
}

export function* authorDetailsWatcher() {
  yield takeLeading(GET_AUTHOR_DETAILS_REQUEST, getAuthorDetailsSaga)
}