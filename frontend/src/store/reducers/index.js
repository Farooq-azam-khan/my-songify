import { combineReducers } from "redux";
import userReducer from "./userReducer";
import songsReducer from "./songsReducer";
const rootReducer = combineReducers({ user: userReducer, songs: songsReducer });

export default rootReducer;
