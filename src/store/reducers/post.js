import { GET_POST, GET_POST_COMMENTS, ADD_POST_COMMENT } from "store/types";
import { keyToNumber } from "helpers/keyToNumber";

const initialState = {
    data: {},
    comments: [],
};

const addComment = (state, newItem) => [
    keyToNumber(newItem, "postId"),
    ...state,
];

export default function (state = initialState, action) {
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
                comments: addComment(state.comments, payload),
            };
        default:
            return state;
    }
}
