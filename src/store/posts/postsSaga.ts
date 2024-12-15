import { call, put, takeLeading } from 'redux-saga/effects';
import { handleSagaError } from 'src/utils/error';
import { GET_POSTS_REQUEST, getPostsFailure, getPostsParamsSuccess, GetPostsRequestAction, getPostsSuccess } from './postsActions';
import { getPosts, GetPostsResponse } from 'src/api/postsApi';
import { makeDelay } from 'src/api';


function* getPostsSaga(action: GetPostsRequestAction) {
  try {
    // const response: AxiosResponse<GetPostsResponse> = yield call(getPosts, 1)
    // console.log(response.headers['x-pagination-page-count'])
    // const count: string = response.headers['x-pagination-page-count']
    const response: GetPostsResponse = yield call(getPosts, action.payload)
    yield makeDelay(500)
    yield put(getPostsParamsSuccess(response.headers))
    yield put(getPostsSuccess(response.data))
    console.log('fetchPosts')
  } catch (error) {
    const message = handleSagaError(error, 'Posts request failed')
    yield put(getPostsFailure(message))
  }
}

export function* postsWatcher() {
  yield takeLeading(GET_POSTS_REQUEST, getPostsSaga)
}