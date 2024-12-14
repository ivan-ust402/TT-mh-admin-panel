import { getAccessToken } from 'src/utils/cookies';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, AuthActionTypes, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from './authActions';

interface AuthState {
  error: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: !!getAccessToken(),
  loading: false,
  error: null
};

const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, isAuthenticated: true };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGOUT_SUCCESS:
      return { ...state, loading: false, isAuthenticated: false };
    case LOGOUT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;