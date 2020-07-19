import { toastr } from 'react-redux-toastr';
import API from 'api';
import { 
    GET_POST,
    GET_POST_COMMENTS,
    ADD_POST_COMMENT
} from 'store/types';

export const getPost = id => async dispatch => {
    let list = [];
    
    try {
        const response = await API.get(`posts/${id}`);
        list = response.data;
    } catch (error) {
        console.error('Error getPost: ', error)
        toastr.error("","Something went wrong. Try again.");
    }
    dispatch({
        type: GET_POST,
        payload: list
    })
}

export const getPostComments = id => async dispatch => {
    let list = [];
    try {
        const response = await API.get(`posts/${id}/comments`);
        list = response.data;
    } catch (error) {
        console.error('Error getPostComments: ', error)
        toastr.error("","Something went wrong. Try again.");
    }
    dispatch({
        type: GET_POST_COMMENTS,
        payload: list
    })
}

export const addComment = params => async dispatch => {
    let comment = {};
    try {
        const response = await API.post(`comments`, params);
        comment = response.data;
        toastr.success("","Comment has been added");
    } catch (error) {
        console.error('Error addComment: ', error)
        toastr.error("","Something went wrong. Try again.");
    }
    dispatch({
        type: ADD_POST_COMMENT,
        payload: comment
    })
}