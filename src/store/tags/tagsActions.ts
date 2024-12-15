import { Tag } from 'src/api/tagsApi';

export const GET_TAGS_REQUEST = 'GET_TAGS_REQUEST'
export const GET_TAGS_SUCCESS = 'GET_TAGS_SUCCESS'
export const GET_TAGS_FAILURE = 'GET_TAGS_FAILURE'

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

export type GetTagsActionTypes = GetTagsRequestAction | GetTagsSuccessAction | GetTagsFailureAction

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