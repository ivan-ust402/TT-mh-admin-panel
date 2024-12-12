import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import authReducer from "./auth/authReducer";
import {authWatcher} from "./auth/authSaga";
import { all } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

function* rootSagas () {
  yield all([
    authWatcher()
  ])
}

sagaMiddleware.run(rootSagas);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
