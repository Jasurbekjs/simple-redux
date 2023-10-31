import { combineReducers, legacy_createStore } from "redux";
import countReducer from "./countReducer";
import usersReducer from "./userReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
    countReducer,
    usersReducer
})

export const store = legacy_createStore(
    rootReducer,
    composeWithDevTools()
)