import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profileReduser";
import messagesReducer from "./messagesReduser";
import userReducer from "./usersReducer";

let reducers = combineReducers({
    profilePages: profileReducer,
    messagesPages: messagesReducer,
    usersPage: userReducer,
});

let store = legacy_createStore(reducers);

export default store;