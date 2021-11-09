import { combineReducers } from "redux";
import profileReducer from "./profileReducer";
import userReducer from "./userReducer";

export default combineReducers({
    view: profileReducer,
    user: userReducer
});
