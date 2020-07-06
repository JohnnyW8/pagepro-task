import { toastr } from 'react-redux-toastr';
import API from '../../api';
import { 
    GET_USER_DATA, 
    GET_USER_POSTS,
    REMOVE_POST,
    ADD_POST
} from '../types';


export const getUser = id => async dispatch => {
    let data = {};
    try {
        const response = await API.get(`users/${id}`);
        data = response.data;
    } catch (error) {
        console.error('Error getUser: ', error);
        toastr.error("","Something went wrong. Try again.");
    }
    dispatch({
        type: GET_USER_DATA,
        payload: data
    })
}
export const getUserPosts = id => async dispatch => {
    let list = [];
    try {
        const response = await API.get(`users/${id}/posts`);
        list = response.data;
    } catch (error) {
        console.error('Error getUserPosts: ', error)
        toastr.error("","Something went wrong. Try again.");
    }
    dispatch({
        type: GET_USER_POSTS,
        payload: list
    })
}

export const removeUserPost = id => async dispatch => {
    let deletedId = null;
    try {
        const response = await API.delete(`posts/${id}`)
        if(response.status === 200) deletedId = id;
        toastr.success("","Post has been removed");
    } catch (error) {
        console.error('Error removeUserPost: ', error)
        toastr.error("","Something went wrong. Try again.");
    }
    
    dispatch({
        type: REMOVE_POST,
        payload: deletedId
    })
}

export const addPost = params => async dispatch => {
    let post = {};
    try {
        const response = await API.post(`posts`, params);
        post = response.data;
        toastr.success("","Post has been added");
    } catch (error) {
        console.error('Error addPost: ', error);
        toastr.error("","Something went wrong. Try again.");
        return;
    }
    dispatch({
        type: ADD_POST,
        payload: post
    })
}
