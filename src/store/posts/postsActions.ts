import { GetPostsParams, Post } from 'src/api/postsApi';


export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_PARAMS_SUCCESS = 'GET_POSTS_PARAMS_SUCCESS'
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'

export interface GetPostsRequestAction {
  payload: number;
  type: typeof GET_POSTS_REQUEST;
}
export interface GetPostsSuccessAction {
  payload: Post[];
  type: typeof GET_POSTS_SUCCESS;
}
export interface GetPostsParamsSuccessAction {
  payload: GetPostsParams;
  type: typeof GET_POSTS_PARAMS_SUCCESS;
}
export interface GetPostsFailureAction {
  payload: string;
  type: typeof GET_POSTS_FAILURE;
}

export type GetPostsActionTypes = GetPostsRequestAction | GetPostsSuccessAction | GetPostsParamsSuccessAction | GetPostsFailureAction



export const getPostsRequest = (page: number): GetPostsRequestAction => ({
  type: GET_POSTS_REQUEST,
  payload: page
})

export const getPostsSuccess = (posts: Post[]): GetPostsSuccessAction => ({
  type: GET_POSTS_SUCCESS,
  payload: posts
})

export const getPostsParamsSuccess = (params: GetPostsParams): GetPostsParamsSuccessAction => ({
  type: GET_POSTS_PARAMS_SUCCESS,
  payload: params
})

export const getPostsFailure = (error: string): GetPostsFailureAction => ({
  type: GET_POSTS_FAILURE,
  payload: error
})