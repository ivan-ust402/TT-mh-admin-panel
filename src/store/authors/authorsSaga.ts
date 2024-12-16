import { call, put, takeLeading } from 'redux-saga/effects';
import { handleResponseError } from 'src/utils/error';
import { makeDelay } from 'src/api';
import { AxiosResponse } from 'axios';
import { GET_AUTHOR_DETAILS_REQUEST, GET_AUTHORS_REQUEST, getAuthorDetailsFailure, GetAuthorDetailsRequestAction, getAuthorDetailsSuccess, getAuthorsFailure, getAuthorsSuccess } from './authorsActions';
import { Author, AuthorDetails, getAuthor, getAuthors } from 'src/api/authorsApi';

function* getAuthorsSaga() {
  try {
    const response: AxiosResponse<Author[]> = yield call(getAuthors)
    yield makeDelay(300)
    yield put(getAuthorsSuccess({ authors: response.data }))
  } catch (error) {
    const errorMessage = handleResponseError(error, 'Authors request failed!')
    yield put(getAuthorsFailure(errorMessage))
  }
}

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

export function* authorsWatcher() {
  yield takeLeading(GET_AUTHORS_REQUEST, getAuthorsSaga)
  yield takeLeading(GET_AUTHOR_DETAILS_REQUEST, getAuthorDetailsSaga)
}