import { GET_AUTHOR_DETAILS_FAILURE, GET_AUTHOR_DETAILS_REQUEST, GET_AUTHOR_DETAILS_SUCCESS, GET_AUTHORS_FAILURE, GET_AUTHORS_REQUEST, GET_AUTHORS_SUCCESS, GetAuthorsActionTypes } from './authorsActions';
import { Author, AuthorDetails } from 'src/api/authorsApi';

interface AuthorsState {
  author: AuthorDetails | null,
  authors: Author[] | null,
  error: string | null,
  loading: boolean
}

const initialState: AuthorsState = {
  authors: null,
  loading: false,
  error: null,
  author: null
}


const authorsReducer = (state = initialState, action: GetAuthorsActionTypes): AuthorsState => {
  switch (action.type) {
    case GET_AUTHORS_REQUEST:
      return { ...state, loading: true, error: null }
    case GET_AUTHORS_SUCCESS:
      return { ...state, ...action.payload, loading: false, error: null }
    case GET_AUTHORS_FAILURE:
      return { ...state, loading: false, error: action.payload }
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

export default authorsReducer