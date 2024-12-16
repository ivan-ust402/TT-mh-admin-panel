import { GET_AUTHOR_DETAILS_FAILURE, GET_AUTHOR_DETAILS_REQUEST, GET_AUTHOR_DETAILS_SUCCESS, GetAuthorDetailsActionTypes } from './authorActions';
import { AuthorDetails } from 'src/api/authorApi';

interface AuthorDetailsState {
  author: AuthorDetails | null,
  error: string | null;
  loading: boolean;
}

const initialState: AuthorDetailsState = {
  author: null,
  loading: false,
  error: null
}

const authorDetailsReducer = (state = initialState, action: GetAuthorDetailsActionTypes) => {
  switch (action.type) {
    case GET_AUTHOR_DETAILS_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_AUTHOR_DETAILS_SUCCESS:
      return { ...state, loading: false, error: null, author: action.payload };
    case GET_AUTHOR_DETAILS_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
}

export default authorDetailsReducer