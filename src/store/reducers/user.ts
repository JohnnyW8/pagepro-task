import {
    GET_USER_DATA,
    GET_USER_POSTS,
    REMOVE_POST,
    ADD_POST,
} from "store/types";
import { keyToNumber } from "helpers/keyToNumber";

const initialState = {
    data: {},
    posts: [],
};
interface Post {
    id: number;
    userId: number;
    body: string;
    title: string;
}

interface RemovePost {
    (a: Post[], b: number): Post[];
}

interface AddPost {
    (a: Post[], b: Post): Post[];
}

const removePost: RemovePost = (state, id) =>
    state.filter((val) => val.id !== id);

const addPost: AddPost = (state, newItem) => [
    keyToNumber(newItem, "userId"),
    ...state,
];

export default function (
    state = initialState,
    action: { type: string; payload: any }
) {
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
                posts: removePost(state.posts, payload),
            };
        case ADD_POST:
            return {
                ...state,
                posts: addPost(state.posts, payload),
            };
        default:
            return state;
    }
}
