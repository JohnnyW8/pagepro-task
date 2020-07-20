import { combineReducers } from "redux";
import { reducer as toastr } from "react-redux-toastr";
import users from "./users";
import user from "./user";
import post from "./post";

export default combineReducers({
    users,
    user,
    post,
    toastr,
});
