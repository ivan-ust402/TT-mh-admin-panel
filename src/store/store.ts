import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer from './auth/authReducer';
import { authWatcher } from './auth/authSaga';
import { all } from 'redux-saga/effects';
import { profileWatcher } from './profile/profileSaga';
import profileReducer from './profile/profileReducer';
import { postsWatcher } from './posts/postsSaga';
import postsReducer from './posts/postsReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  posts: postsReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* rootSagas() {
  yield all([
    authWatcher(),
    profileWatcher(),
    postsWatcher()
  ])
}

sagaMiddleware.run(rootSagas);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
