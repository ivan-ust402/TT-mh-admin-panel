import { call, put, takeLeading } from 'redux-saga/effects';
import { handleResponseError } from 'src/utils/error';
import { GET_TAG_DETAILS_REQUEST, GET_TAGS_REQUEST, getTagDetailsFailure, GetTagDetailsRequestAction, getTagDetailsSuccess, getTagsFailure, getTagsSuccess } from './tagsActions';
import { getTag, getTags, Tag } from 'src/api/tagsApi';
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

function* getTagDetailsSaga(action: GetTagDetailsRequestAction) {
  try {
    const response: AxiosResponse<Tag> = yield call(getTag, action.payload)
    yield makeDelay(300)
    yield put(getTagDetailsSuccess(response.data))
  } catch (error) {
    const errorMessage = handleResponseError(error, '')
    yield put(getTagDetailsFailure(errorMessage))
  }
}

export function* tagsWatcher() {
  yield takeLeading(GET_TAGS_REQUEST, getTagsSaga)
  yield takeLeading(GET_TAG_DETAILS_REQUEST, getTagDetailsSaga)
}