import { Author } from 'src/api/authorsApi';

export const GET_AUTHORS_REQUEST = 'GET_AUTHORS_REQUEST'
export const GET_AUTHORS_SUCCESS = 'GET_AUTHORS_SUCCESS'
export const GET_AUTHORS_FAILURE = 'GET_AUTHORS_FAILURE'

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

export type GetAuthorsActionTypes = GetAuthorsRequestAction | GetAuthorsSuccessAction | GetAuthorsFailureAction

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