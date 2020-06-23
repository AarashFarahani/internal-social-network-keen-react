import {
    combineReducers
} from "redux";
import user from "../../keen-auth/store/userReducer";
import task from "./taskReducer";

export default combineReducers({
    user,
    task
});