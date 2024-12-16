import { Post, PostDetails } from 'src/api/postsApi';
import { ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, DELETE_POST_FAILURE, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, EDIT_POST_FAILURE, EDIT_POST_REQUEST, EDIT_POST_SUCCESS, GET_POST_DETAILS_FAILURE, GET_POST_DETAILS_REQUEST, GET_POST_DETAILS_SUCCESS, GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, PostsActionTypes } from './postsActions';


interface PostsState {
  currentPage: number,
  error: string | null;
  loading: boolean;
  pageCount: number;
  post: PostDetails | null,
  posts: Post[] | null;
  postsPerPage: number;
  totalPostsCount: number;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
  pageCount: 0,
  postsPerPage: 0,
  totalPostsCount: 0,
  currentPage: 0,
  post: null
}

const postsReducer = (state = initialState, action: PostsActionTypes): PostsState => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return { ...state, loading: true, error: null }
    case GET_POSTS_SUCCESS:
      return { ...state, ...action.payload, loading: false, error: null }
    case GET_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case ADD_POST_REQUEST:
      return { ...state, loading: true, error: null }
    case ADD_POST_SUCCESS:
      return { ...state, loading: false, error: null }
    case ADD_POST_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case EDIT_POST_REQUEST:
      return { ...state, loading: true, error: null }
    case EDIT_POST_SUCCESS:
      return { ...state, loading: false, error: null }
    case EDIT_POST_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case DELETE_POST_REQUEST:
      return { ...state, loading: true, error: null }
    case DELETE_POST_SUCCESS:
      return { ...state, loading: false, error: null }
    case DELETE_POST_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case GET_POST_DETAILS_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_POST_DETAILS_SUCCESS:
      return { ...state, loading: false, error: null, post: action.payload };
    case GET_POST_DETAILS_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default postsReducer