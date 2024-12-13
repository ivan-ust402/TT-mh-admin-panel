import { GetProfileResponse } from "src/api/profileApi";

export const GET_PROFILE_REQUEST = "GET_PROFILE_REQUEST";
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
export const GET_PROFILE_FAILURE = "GET_PROFILE_FAILURE";

export interface GetProfileRequestAction {
  type: typeof GET_PROFILE_REQUEST;
}

export interface GetProfileSuccessAction {
  type: typeof GET_PROFILE_SUCCESS;
  payload: GetProfileResponse
}

export interface GetProfileFailureAction {
  type: typeof GET_PROFILE_FAILURE;
  payload: string;
}

export type GetProfileActionTypes = GetProfileRequestAction | GetProfileSuccessAction | GetProfileFailureAction;

export const getProfileRequest = (): GetProfileRequestAction => ({
  type: GET_PROFILE_REQUEST,
})

export const getProfileSuccess = (profile: GetProfileResponse): GetProfileSuccessAction => ({
  type: GET_PROFILE_SUCCESS,
  payload: profile
})

export const getProfileFailure = (error: string): GetProfileFailureAction => ({
  type: GET_PROFILE_FAILURE,
  payload: error,
})