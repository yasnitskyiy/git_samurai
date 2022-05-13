import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profileReduser";
import messagesReducer from "./messagesReduser";

let reducers = combineReducers({
    profilePages: profileReducer,
    messagesPages: messagesReducer,
});

let store = legacy_createStore(reducers);

export default store;