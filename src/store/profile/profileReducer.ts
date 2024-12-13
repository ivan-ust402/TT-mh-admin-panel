import { GetProfileResponse } from "src/api/profileApi";
import { GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GetProfileActionTypes } from "./profileActions"

interface ProfileState {
  profile: GetProfileResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  profile: null,
  loading: false,
  error: null
}

const profileReducer = (state = initialState, action: GetProfileActionTypes): ProfileState => {
  switch (action.type) {
    case GET_PROFILE_REQUEST: 
      return { ...state, loading: true, error: null };
    case GET_PROFILE_SUCCESS:
      return { ...state, profile: action.payload, loading: false, error: null };
    case GET_PROFILE_FAILURE: 
      return { ...state, loading: false, error: action.payload};
    default:
      return state;  
  }
}

export default profileReducer;