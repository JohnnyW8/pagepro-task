import {
    GET_USER_DATA,
    GET_USER_POSTS,
    REMOVE_POST,
    ADD_POST,
    AppThunk
} from "store/types";

import { dispatchApiAction } from "helpers/dispatchApiAction";
import { Dispatch } from "redux";

export const getUser = (id: number): AppThunk => async (dispatch: Dispatch) => {
    dispatch(dispatchApiAction(`users/${id}`, GET_USER_DATA));
};

export const getUserPosts = (id: number): AppThunk => async (dispatch: Dispatch) => {
    dispatch(dispatchApiAction(`users/${id}/posts`, GET_USER_POSTS));
};

export const removeUserPost = (itemId: number): AppThunk => async (dispatch: Dispatch) => {
    dispatch(
        dispatchApiAction(`posts/${itemId}`, REMOVE_POST, {
            type: "delete",
            successMessage: "Post has been removed",
            itemId,
        })
    );
};

export const addPost = (params: object): AppThunk => async (dispatch: Dispatch) => {
    dispatch(
        dispatchApiAction("posts", ADD_POST, {
            type: "post",
            successMessage: "Post has been added",
            params,
        })
    );
};
