import { Dispatch } from "redux";
import { GET_POST, GET_POST_COMMENTS, ADD_POST_COMMENT, AppThunk } from "store/types";
import { dispatchApiAction } from "helpers/dispatchApiAction";

export const getPost = (id: number): AppThunk => async (dispatch: Dispatch) => {
    dispatch(dispatchApiAction(`posts/${id}`, GET_POST));
};

export const getPostComments = (id: number): AppThunk => async (dispatch: Dispatch) => {
    dispatch(dispatchApiAction(`posts/${id}/comments`, GET_POST_COMMENTS));
};

export const addComment = (params: object): AppThunk => async (dispatch: Dispatch) => {
    dispatch(
        dispatchApiAction("comments", ADD_POST_COMMENT, {
            type: "post",
            successMessage: "Comment has been added",
            params,
        })
    );
};
