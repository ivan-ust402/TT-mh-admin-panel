import { TagDetails } from 'src/api/tagApi';


export const GET_TAG_DETAILS_REQUEST = 'GET_TAG_DETAILS_REQUEST'
export const GET_TAG_DETAILS_SUCCESS = 'GET_TAG_DETAILS_SUCCESS'
export const GET_TAG_DETAILS_FAILURE = 'GET_TAG_DETAILS_FAILURE'

export interface GetTagDetailsRequestAction {
  payload: number;
  type: typeof GET_TAG_DETAILS_REQUEST;
}
export interface GetTagDetailsSuccessAction {
  payload: TagDetails,
  type: typeof GET_TAG_DETAILS_SUCCESS;
}
export interface GetTagDetailsFailureAction {
  payload: string;
  type: typeof GET_TAG_DETAILS_FAILURE;
}

export type GetTagDetailsActionTypes = GetTagDetailsRequestAction | GetTagDetailsSuccessAction | GetTagDetailsFailureAction

export const getTagDetailsRequest = (id: number): GetTagDetailsRequestAction => ({
  type: GET_TAG_DETAILS_REQUEST,
  payload: id
})

export const getTagDetailsSuccess = (payload: TagDetails): GetTagDetailsSuccessAction => ({
  type: GET_TAG_DETAILS_SUCCESS,
  payload
})

export const getTagDetailsFailure = (error: string): GetTagDetailsFailureAction => ({
  type: GET_TAG_DETAILS_FAILURE,
  payload: error
})