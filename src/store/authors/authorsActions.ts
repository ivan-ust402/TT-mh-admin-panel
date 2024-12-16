import { Author, AuthorDetails } from 'src/api/authorsApi';

export const GET_AUTHORS_REQUEST = 'GET_AUTHORS_REQUEST'
export const GET_AUTHORS_SUCCESS = 'GET_AUTHORS_SUCCESS'
export const GET_AUTHORS_FAILURE = 'GET_AUTHORS_FAILURE'
export const GET_AUTHOR_DETAILS_REQUEST = 'GET_AUTHOR_DETAILS_REQUEST'
export const GET_AUTHOR_DETAILS_SUCCESS = 'GET_AUTHOR_DETAILS_SUCCESS'
export const GET_AUTHOR_DETAILS_FAILURE = 'GET_AUTHOR_DETAILS_FAILURE'

export interface GetAuthorsRequestAction {
  type: typeof GET_AUTHORS_REQUEST;
}
export interface GetAuthorsSuccessAction {
  payload: GetAuthorsSuccessPayload,
  type: typeof GET_AUTHORS_SUCCESS;
}
export interface GetAuthorsFailureAction {
  payload: string;
  type: typeof GET_AUTHORS_FAILURE;
}

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

export type GetAuthorsActionTypes =
  GetAuthorsRequestAction |
  GetAuthorsSuccessAction |
  GetAuthorsFailureAction |
  GetAuthorDetailsRequestAction |
  GetAuthorDetailsSuccessAction |
  GetAuthorDetailsFailureAction

export interface GetAuthorsSuccessPayload {
  authors: Author[];
}

export const getAuthorsRequest = (): GetAuthorsRequestAction => ({
  type: GET_AUTHORS_REQUEST
})

export const getAuthorsSuccess = (payload: GetAuthorsSuccessPayload): GetAuthorsSuccessAction => ({
  type: GET_AUTHORS_SUCCESS,
  payload
})

export const getAuthorsFailure = (error: string): GetAuthorsFailureAction => ({
  type: GET_AUTHORS_FAILURE,
  payload: error
})

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