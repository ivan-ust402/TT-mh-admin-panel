import { Tag } from 'src/api/tagsApi';

export const GET_TAGS_REQUEST = 'GET_TAGS_REQUEST'
export const GET_TAGS_SUCCESS = 'GET_TAGS_SUCCESS'
export const GET_TAGS_FAILURE = 'GET_TAGS_FAILURE'
export const GET_TAG_DETAILS_REQUEST = 'GET_TAG_DETAILS_REQUEST'
export const GET_TAG_DETAILS_SUCCESS = 'GET_TAG_DETAILS_SUCCESS'
export const GET_TAG_DETAILS_FAILURE = 'GET_TAG_DETAILS_FAILURE'

export interface GetTagsRequestAction {
  type: typeof GET_TAGS_REQUEST;
}
export interface GetTagsSuccessAction {
  payload: GetTagsSuccessPayload,
  type: typeof GET_TAGS_SUCCESS;
}
export interface GetTagsFailureAction {
  payload: string;
  type: typeof GET_TAGS_FAILURE;
}
export interface GetTagDetailsRequestAction {
  payload: number;
  type: typeof GET_TAG_DETAILS_REQUEST;
}
export interface GetTagDetailsSuccessAction {
  payload: Tag,
  type: typeof GET_TAG_DETAILS_SUCCESS;
}
export interface GetTagDetailsFailureAction {
  payload: string;
  type: typeof GET_TAG_DETAILS_FAILURE;
}

export type GetTagsActionTypes = 
  GetTagsRequestAction | 
  GetTagsSuccessAction |
  GetTagsFailureAction |
  GetTagDetailsRequestAction | 
  GetTagDetailsSuccessAction | 
  GetTagDetailsFailureAction

export interface GetTagsSuccessPayload {
  tags: Tag[];
}

export const getTagsRequest = (): GetTagsRequestAction => ({
  type: GET_TAGS_REQUEST
})

export const getTagsSuccess = (payload: GetTagsSuccessPayload): GetTagsSuccessAction => ({
  type: GET_TAGS_SUCCESS,
  payload
})

export const getTagsFailure = (error: string): GetTagsFailureAction => ({
  type: GET_TAGS_FAILURE,
  payload: error
})

export const getTagDetailsRequest = (id: number): GetTagDetailsRequestAction => ({
  type: GET_TAG_DETAILS_REQUEST,
  payload: id
})

export const getTagDetailsSuccess = (payload: Tag): GetTagDetailsSuccessAction => ({
  type: GET_TAG_DETAILS_SUCCESS,
  payload
})

export const getTagDetailsFailure = (error: string): GetTagDetailsFailureAction => ({
  type: GET_TAG_DETAILS_FAILURE,
  payload: error
})