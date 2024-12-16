import { call, put, takeLeading } from 'redux-saga/effects';
import { handleResponseError } from 'src/utils/error';
import { ADD_POST_REQUEST, addPostFailure, AddPostRequestAction, addPostSuccess, DELETE_POST_REQUEST, deletePostFailure, DeletePostRequestAction, deletePostSuccess, EDIT_POST_REQUEST, editPostFailure, EditPostRequestAction, editPostSuccess, GET_POST_DETAILS_REQUEST, GET_POSTS_REQUEST, getPostDetailsFailure, GetPostDetailsRequestAction, getPostDetailsSuccess, getPostsFailure, getPostsRequest, GetPostsRequestAction, getPostsSuccess } from './postsActions';
import { addPost, deletePost, editPost, getPost, getPosts, Post, PostDetails } from 'src/api/postsApi';
import { makeDelay } from 'src/api';
import { AxiosResponse } from 'axios';
import { router } from 'src/router';


function* getPostsSaga(action: GetPostsRequestAction) {
  try {
    const response: AxiosResponse<Post[]> = yield call(getPosts, action.payload)
    yield makeDelay(300)
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

function* addPostSaga(action: AddPostRequestAction) {
  try {
    yield call(addPost, action.payload)
    yield put(addPostSuccess())
    router.navigate('/posts')
  } catch (error) {
    const message = handleResponseError(error, 'Add post request failed')
    yield put(addPostFailure(message))
  }
}

function* editPostSaga(action: EditPostRequestAction) {
  try {
    yield call(editPost, action.payload)
    yield put(editPostSuccess())
    router.navigate('/posts')
  } catch (error) {
    const message = handleResponseError(error, 'Add post request failed')
    yield put(editPostFailure(message))
  }
}

function* deletePostSaga(action: DeletePostRequestAction) {
  try {
    yield call(deletePost, action.payload)
    yield put(deletePostSuccess())
    yield put(getPostsRequest(1))
    router.navigate('/posts')
  } catch (error) {
    const message = handleResponseError(error, 'Add post request failed')
    yield put(deletePostFailure(message))
  }
}

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

export function* postsWatcher() {
  yield takeLeading(GET_POSTS_REQUEST, getPostsSaga)
  yield takeLeading(ADD_POST_REQUEST, addPostSaga)
  yield takeLeading(EDIT_POST_REQUEST, editPostSaga)
  yield takeLeading(DELETE_POST_REQUEST, deletePostSaga)
  yield takeLeading(GET_POST_DETAILS_REQUEST, getPostDetailsSaga)
}