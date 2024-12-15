import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer from './auth/authReducer';
import { authWatcher } from './auth/authSaga';
import { all } from 'redux-saga/effects';
import { profileWatcher } from './profile/profileSaga';
import profileReducer from './profile/profileReducer';
import { postsWatcher } from './posts/postsSaga';
import postsReducer from './posts/postsReducer';
import postDetailsReducer from './postDetails/postReducer';
import { postDetailsWatcher } from './postDetails/postSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  posts: postsReducer,
  postDetails: postDetailsReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* rootSagas() {
  yield all([
    authWatcher(),
    profileWatcher(),
    postsWatcher(),
    postDetailsWatcher()
  ])
}

sagaMiddleware.run(rootSagas);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
