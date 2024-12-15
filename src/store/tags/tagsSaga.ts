import { call, put, takeLeading } from 'redux-saga/effects';
import { handleResponseError } from 'src/utils/error';
import { GET_TAGS_REQUEST, getTagsFailure, getTagsSuccess } from './tagsActions';
import { getTags, Tag } from 'src/api/tagsApi';
import { makeDelay } from 'src/api';
import { AxiosResponse } from 'axios';



function* getTagsSaga() {
  try {
    const response: AxiosResponse<Tag[]> = yield call(getTags)
    yield makeDelay(300)
    yield put(getTagsSuccess({ tags: response.data }))
  } catch (error) {
    const errorMessage = handleResponseError(error, 'Tags request failed!')
    yield put(getTagsFailure(errorMessage))
  }
}

export function* tagsWatcher() {
  yield takeLeading(GET_TAGS_REQUEST, getTagsSaga)
}