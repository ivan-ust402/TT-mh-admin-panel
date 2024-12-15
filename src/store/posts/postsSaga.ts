import { call, put, takeLeading } from 'redux-saga/effects';
import { handleResponseError } from 'src/utils/error';
import { GET_POSTS_REQUEST, getPostsFailure, GetPostsRequestAction, getPostsSuccess } from './postsActions';
import { getPosts, Post } from 'src/api/postsApi';
import { makeDelay } from 'src/api';
import { AxiosResponse } from 'axios';


function* getPostsSaga(action: GetPostsRequestAction) {
  try {
    const response: AxiosResponse<Post[]> = yield call(getPosts, action.payload)
    yield makeDelay(500)
    yield put(getPostsSuccess({
      posts: response.data,
      currentPage: Number(response.headers['x-pagination-current-page']) || 0,
      pageCount: Number(response.headers['x-pagination-page-count']) || 0,
      postsPerPage: Number(response.headers['x-pagination-per-page']) || 0,
      totalPostsCount: Number(response.headers['x-pagination-total-count'] || 0)
    }))
  } catch (error) {
    const message = handleResponseError(error, 'Posts request failed')
    yield put(getPostsFailure(message))
  }
}

export function* postsWatcher() {
  yield takeLeading(GET_POSTS_REQUEST, getPostsSaga)
}