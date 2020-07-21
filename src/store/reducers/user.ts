import {
    GET_USER_DATA,
    GET_USER_POSTS,
    REMOVE_POST,
    ADD_POST,
    UserState,
    // UserActionTypes,
} from "store/types";
import { removePostHelper, addPostHelper } from "helpers/modifyStore";

const initialState: UserState = {
    data: {},
    posts: [],
};

export default function (
    state = initialState,
    action: { type: string; payload: any }
    // action: UserActionTypes
): UserState {
    const { type, payload } = action;

    switch (type) {
        case GET_USER_DATA:
            return {
                ...state,
                data: payload,
            };
        case GET_USER_POSTS:
            return {
                ...state,
                posts: payload,
            };
        case REMOVE_POST:
            return {
                ...state,
                posts: removePostHelper(state.posts, payload),
            };
        case ADD_POST:
            return {
                ...state,
                posts: addPostHelper(state.posts, payload),
            };
        default:
            return state;
    }
}
