import { call, put, takeLeading } from 'redux-saga/effects';
import { handleResponseError } from 'src/utils/error';
import { makeDelay } from 'src/api';
import { AxiosResponse } from 'axios';
import { GET_AUTHORS_REQUEST, getAuthorsFailure, getAuthorsSuccess } from './authorsActions';
import { Author, getAuthors } from 'src/api/authorsApi';



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

export function* authorsWatcher() {
  yield takeLeading(GET_AUTHORS_REQUEST, getAuthorsSaga)
}