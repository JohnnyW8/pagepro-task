import { combineReducers } from "redux";
import { reducer as toastr } from "react-redux-toastr";
import users from "./users";
import user from "./user";
import post from "./post";

export const allReducers = combineReducers({
    users,
    user,
    post,
    toastr,
});

export type RootState = ReturnType<typeof allReducers>