import { combineReducers } from "redux";
import users from './users'
import user from './user'
import post from './post'
import { reducer as toastr } from 'react-redux-toastr'


export default combineReducers({
    users,
    user,
    post,
    toastr
});