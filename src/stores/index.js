import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import Logger from "redux-logger";
import rootSaga from "../sagas";

import counter from "../reducers/counter";


const reducers = combineReducers({counter});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware,Logger));

sagaMiddleware.run(rootSaga);
export default store;
