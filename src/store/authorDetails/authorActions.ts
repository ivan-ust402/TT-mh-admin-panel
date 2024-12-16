import { AuthorDetails } from 'src/api/authorApi';


export const GET_AUTHOR_DETAILS_REQUEST = 'GET_AUTHOR_DETAILS_REQUEST'
export const GET_AUTHOR_DETAILS_SUCCESS = 'GET_AUTHOR_DETAILS_SUCCESS'
export const GET_AUTHOR_DETAILS_FAILURE = 'GET_AUTHOR_DETAILS_FAILURE'

export interface GetAuthorDetailsRequestAction {
  payload: number;
  type: typeof GET_AUTHOR_DETAILS_REQUEST;
}
export interface GetAuthorDetailsSuccessAction {
  payload: AuthorDetails,
  type: typeof GET_AUTHOR_DETAILS_SUCCESS;
}
export interface GetAuthorDetailsFailureAction {
  payload: string;
  type: typeof GET_AUTHOR_DETAILS_FAILURE;
}

export type GetAuthorDetailsActionTypes = GetAuthorDetailsRequestAction | GetAuthorDetailsSuccessAction | GetAuthorDetailsFailureAction

export const getAuthorDetailsRequest = (id: number): GetAuthorDetailsRequestAction => ({
  type: GET_AUTHOR_DETAILS_REQUEST,
  payload: id
})

export const getAuthorDetailsSuccess = (payload: AuthorDetails): GetAuthorDetailsSuccessAction => ({
  type: GET_AUTHOR_DETAILS_SUCCESS,
  payload
})

export const getAuthorDetailsFailure = (error: string): GetAuthorDetailsFailureAction => ({
  type: GET_AUTHOR_DETAILS_FAILURE,
  payload: error
})