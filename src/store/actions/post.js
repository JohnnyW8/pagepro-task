import { GET_POST, GET_POST_COMMENTS, ADD_POST_COMMENT } from "store/types";
import { dispatchApiAction } from "helpers/dispatchApiAction";

export const getPost = (id) => async (dispatch) => {
    dispatch(dispatchApiAction(`posts/${id}`, GET_POST));
};

export const getPostComments = (id) => async (dispatch) => {
    dispatch(dispatchApiAction(`posts/${id}/comments`, GET_POST_COMMENTS));
};

export const addComment = (params) => async (dispatch) => {
    dispatch(
        dispatchApiAction("comments", ADD_POST_COMMENT, {
            type: "post",
            successMessage: "Comment has been added",
            params,
        })
    );
};
