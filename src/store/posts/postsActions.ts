import { Post } from 'src/api/postsApi';


export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

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

export type GetPostsActionTypes = GetPostsRequestAction | GetPostsSuccessAction | GetPostsFailureAction

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
