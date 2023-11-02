import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import countReducer from "./countReducer";
import usersReducer from "./userReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

import createSagaMiddleware from 'redux-saga'
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    countReducer,
    usersReducer
})

export const store = legacy_createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootWatcher)