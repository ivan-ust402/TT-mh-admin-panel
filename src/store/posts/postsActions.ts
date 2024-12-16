import { Post, PostDetails } from 'src/api/postsApi';
import { PostEditFormValues } from 'src/components';

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'
export const EDIT_POST_REQUEST = 'EDIT_POST_REQUEST'
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS'
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE'
export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST'
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS'
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE'
export const GET_POST_DETAILS_REQUEST = 'GET_POST_DETAILS_REQUEST'
export const GET_POST_DETAILS_SUCCESS = 'GET_POST_DETAILS_SUCCESS'
export const GET_POST_DETAILS_FAILURE = 'GET_POST_DETAILS_FAILURE'

export interface EditPostRequestActionPayload {
  id: number,
  post: Partial<PostEditFormValues>
}

export interface GetPostsRequestAction {
  payload: number;
  type: typeof GET_POSTS_REQUEST;
}
export interface GetPostsSuccessAction {
  payload: GetPostsSuccessPayload,
  type: typeof GET_POSTS_SUCCESS;
}
export interface GetPostsFailureAction {
  payload: string;
  type: typeof GET_POSTS_FAILURE;
}

export interface AddPostRequestAction {
  payload: PostEditFormValues;
  type: typeof ADD_POST_REQUEST;
}
export interface AddPostSuccessAction {
  type: typeof ADD_POST_SUCCESS;
}
export interface AddPostFailureAction {
  payload: string;
  type: typeof ADD_POST_FAILURE;
}

export interface EditPostRequestAction {
  payload: EditPostRequestActionPayload
  type: typeof EDIT_POST_REQUEST;
}
export interface EditPostSuccessAction {
  type: typeof EDIT_POST_SUCCESS;
}
export interface EditPostFailureAction {
  payload: string;
  type: typeof EDIT_POST_FAILURE;
}

export interface DeletePostRequestAction {
  payload: number
  type: typeof DELETE_POST_REQUEST;
}
export interface DeletePostSuccessAction {
  type: typeof DELETE_POST_SUCCESS;
}
export interface DeletePostFailureAction {
  payload: string;
  type: typeof DELETE_POST_FAILURE;
}

export interface GetPostDetailsRequestAction {
  payload: number;
  type: typeof GET_POST_DETAILS_REQUEST;
}
export interface GetPostDetailsSuccessAction {
  payload: PostDetails,
  type: typeof GET_POST_DETAILS_SUCCESS;
}
export interface GetPostDetailsFailureAction {
  payload: string;
  type: typeof GET_POST_DETAILS_FAILURE;
}

export type PostsActionTypes =
  GetPostsRequestAction |
  GetPostsSuccessAction |
  GetPostsFailureAction |
  AddPostRequestAction |
  AddPostSuccessAction |
  AddPostFailureAction |
  EditPostRequestAction |
  EditPostSuccessAction |
  EditPostFailureAction |
  DeletePostRequestAction |
  DeletePostSuccessAction |
  DeletePostFailureAction |
  GetPostDetailsRequestAction | 
  GetPostDetailsSuccessAction | 
  GetPostDetailsFailureAction

export interface GetPostsSuccessPayload {
  currentPage: number;
  pageCount: number;
  posts: Post[];
  postsPerPage: number;
  totalPostsCount: number;
}

export const getPostsRequest = (page: number): GetPostsRequestAction => ({
  type: GET_POSTS_REQUEST,
  payload: page
})

export const getPostsSuccess = (payload: GetPostsSuccessPayload): GetPostsSuccessAction => ({
  type: GET_POSTS_SUCCESS,
  payload
})

export const getPostsFailure = (error: string): GetPostsFailureAction => ({
  type: GET_POSTS_FAILURE,
  payload: error
})

export const addPostRequest = (post: PostEditFormValues): AddPostRequestAction => ({
  type: ADD_POST_REQUEST,
  payload: post
})

export const addPostSuccess = (): AddPostSuccessAction => ({
  type: ADD_POST_SUCCESS
})

export const addPostFailure = (error: string): AddPostFailureAction => ({
  type: ADD_POST_FAILURE,
  payload: error
})

export const editPostRequest = (payload: EditPostRequestActionPayload): EditPostRequestAction => ({
  type: EDIT_POST_REQUEST,
  payload
})

export const editPostSuccess = (): EditPostSuccessAction => ({
  type: EDIT_POST_SUCCESS
})

export const editPostFailure = (error: string): EditPostFailureAction => ({
  type: EDIT_POST_FAILURE,
  payload: error
})

export const deletePostRequest = (payload: number): DeletePostRequestAction => ({
  type: DELETE_POST_REQUEST,
  payload
})

export const deletePostSuccess = (): DeletePostSuccessAction => ({
  type: DELETE_POST_SUCCESS
})

export const deletePostFailure = (error: string): DeletePostFailureAction => ({
  type: DELETE_POST_FAILURE,
  payload: error
})

export const getPostDetailsRequest = (id: number): GetPostDetailsRequestAction => ({
  type: GET_POST_DETAILS_REQUEST,
  payload: id
})

export const getPostDetailsSuccess = (payload: PostDetails): GetPostDetailsSuccessAction => ({
  type: GET_POST_DETAILS_SUCCESS,
  payload
})

export const getPostDetailsFailure = (error: string): GetPostDetailsFailureAction => ({
  type: GET_POST_DETAILS_FAILURE,
  payload: error
})