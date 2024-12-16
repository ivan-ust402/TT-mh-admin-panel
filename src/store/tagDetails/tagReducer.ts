import { GET_TAG_DETAILS_FAILURE, GET_TAG_DETAILS_REQUEST, GET_TAG_DETAILS_SUCCESS, GetTagDetailsActionTypes } from './tagActions';
import { TagDetails } from 'src/api/tagApi';

interface TagDetailsState {
  error: string | null;
  loading: boolean;
  tag: TagDetails | null
}

const initialState: TagDetailsState = {
  tag: null,
  loading: false,
  error: null
}

const tagDetailsReducer = (state = initialState, action: GetTagDetailsActionTypes) => {
  switch (action.type) {
    case GET_TAG_DETAILS_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_TAG_DETAILS_SUCCESS:
      return { ...state, loading: false, error: null, tag: action.payload };
    case GET_TAG_DETAILS_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
}

export default tagDetailsReducer