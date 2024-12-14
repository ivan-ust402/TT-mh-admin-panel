import { GetPostsParams, Post } from 'src/api/postsApi';
import { GET_POSTS_FAILURE, GET_POSTS_PARAMS_SUCCESS, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GetPostsActionTypes } from './postsActions';


interface PostsState {
  error: string | null;
  loading: boolean;
  params: GetPostsParams | null;
  posts: Post[] | null;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
  params: null
}

const postsReducer = (state = initialState, action: GetPostsActionTypes): PostsState => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return { ...state, loading: true, error: null }
    case GET_POSTS_SUCCESS:
      return { ...state, posts: action.payload,loading: false, error: null }
    case GET_POSTS_PARAMS_SUCCESS:
      return { ...state, params: action.payload,loading: false, error: null }
    case GET_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default postsReducer