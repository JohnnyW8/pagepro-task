import {
    GET_USER_DATA,
    GET_USER_POSTS,
    REMOVE_POST,
    ADD_POST,
} from "store/types";

import { dispatchApiAction } from "helpers/dispatchApiAction";

export const getUser = (id) => async (dispatch) => {
    dispatch(dispatchApiAction(`users/${id}`, GET_USER_DATA));
};

export const getUserPosts = (id) => async (dispatch) => {
    dispatch(dispatchApiAction(`users/${id}/posts`, GET_USER_POSTS));
};

export const removeUserPost = (itemId) => async (dispatch) => {
    dispatch(
        dispatchApiAction(`posts/${itemId}`, REMOVE_POST, {
            type: "delete",
            successMessage: "Post has been removed",
            itemId,
        })
    );
};

export const addPost = (params) => async (dispatch) => {
    dispatch(
        dispatchApiAction("posts", ADD_POST, {
            type: "post",
            successMessage: "Post has been added",
            params,
        })
    );
};
