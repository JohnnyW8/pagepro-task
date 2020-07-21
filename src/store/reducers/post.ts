import {
    GET_POST,
    GET_POST_COMMENTS,
    ADD_POST_COMMENT,
    PostState,
    // PostActionTypes,
} from "store/types";
import { addCommentHelper } from "helpers/modifyStore";

const initialState: PostState = {
    data: {},
    comments: [],
};

export default function (
    state = initialState,
    action: { type: string; payload: any }
    // action: PostActionTypes
): PostState {
    const { type, payload } = action;
    switch (type) {
        case GET_POST:
            return {
                ...state,
                data: payload,
            };
        case GET_POST_COMMENTS:
            return {
                ...state,
                comments: payload,
            };
        case ADD_POST_COMMENT:
            return {
                ...state,
                comments: addCommentHelper(state.comments, payload),
            };
        default:
            return state;
    }
}
