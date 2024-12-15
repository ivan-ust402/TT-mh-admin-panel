import { PostDetails } from 'src/api/postApi';


export const GET_POST_DETAILS_REQUEST = 'GET_POST_DETAILS_REQUEST'
export const GET_POST_DETAILS_SUCCESS = 'GET_POST_DETAILS_SUCCESS'
export const GET_POST_DETAILS_FAILURE = 'GET_POST_DETAILS_FAILURE'

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

export type GetPostDetailsActionTypes = GetPostDetailsRequestAction | GetPostDetailsSuccessAction | GetPostDetailsFailureAction

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