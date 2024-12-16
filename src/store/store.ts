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
import tagsReducer from './tags/tagsReducer';
import { tagsWatcher } from './tags/tagsSaga';
import authorsReducer from './authors/authorsReducer';
import { authorsWatcher } from './authors/authorsSaga';
import { authorDetailsWatcher } from './authorDetails/authorSaga';
import authorDetailsReducer from './authorDetails/authorReducer';
import { tagDetailsWatcher } from './tagDetails/tagSaga';
import tagDetailsReducer from './tagDetails/tagReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  posts: postsReducer,
  postDetails: postDetailsReducer,
  tags: tagsReducer,
  tagDetails: tagDetailsReducer,
  authors: authorsReducer,
  author: authorDetailsReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* rootSagas() {
  yield all([
    authWatcher(),
    profileWatcher(),
    postsWatcher(),
    postDetailsWatcher(),
    tagsWatcher(),
    tagDetailsWatcher(),
    authorsWatcher(),
    authorDetailsWatcher()
  ])
}

sagaMiddleware.run(rootSagas);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
