import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer from './auth/authReducer';
import { authWatcher } from './auth/authSaga';
import { all } from 'redux-saga/effects';
import { profileWatcher } from './profile/profileSaga';
import profileReducer from './profile/profileReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* rootSagas() {
  yield all([
    authWatcher(),
    profileWatcher()
  ])
}

sagaMiddleware.run(rootSagas);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
