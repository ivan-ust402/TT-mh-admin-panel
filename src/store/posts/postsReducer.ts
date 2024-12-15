import { Post } from 'src/api/postsApi';
import { GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GetPostsActionTypes } from './postsActions';


interface PostsState {
  currentPage: number,
  error: string | null;
  loading: boolean;
  pageCount: number;
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
  currentPage: 0
}

const postsReducer = (state = initialState, action: GetPostsActionTypes): PostsState => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return { ...state, loading: true, error: null }
    case GET_POSTS_SUCCESS:
      return { ...state, ...action.payload, loading: false, error: null }
    case GET_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default postsReducer