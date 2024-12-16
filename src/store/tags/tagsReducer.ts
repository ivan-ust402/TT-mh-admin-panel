import { Tag } from 'src/api/tagsApi';
import { GET_TAG_DETAILS_FAILURE, GET_TAG_DETAILS_REQUEST, GET_TAG_DETAILS_SUCCESS, GET_TAGS_FAILURE, GET_TAGS_REQUEST, GET_TAGS_SUCCESS, GetTagsActionTypes } from './tagsActions';


interface TagsState {
  error: string | null,
  loading: boolean,
  tag: Tag | null,
  tags: Tag[] | null
}

const initialState: TagsState = {
  tags: null,
  loading: false,
  error: null,
  tag: null
}


const tagsReducer = (state = initialState, action: GetTagsActionTypes): TagsState => {
  switch (action.type) {
    case GET_TAGS_REQUEST:
      return { ...state, loading: true, error: null }
    case GET_TAGS_SUCCESS:
      return { ...state, ...action.payload, loading: false, error: null }
    case GET_TAGS_FAILURE:
      return { ...state, loading: false, error: action.payload }
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

export default tagsReducer