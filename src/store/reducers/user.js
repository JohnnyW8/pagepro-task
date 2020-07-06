import { 
    GET_USER_DATA, 
    GET_USER_POSTS,
    REMOVE_POST,
    ADD_POST
} from '../types';
import { keyToNumber } from '../../helpers/keyToNumber';

const initialState = {
    data: {},
    posts: []
}

const removePost = (state, id) => id ? state.filter(val => val.id !== id) : state;

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_USER_DATA:
            return {
                ...state, 
                data: payload
            };
        case GET_USER_POSTS:
            return {
                ...state, 
                posts: payload
            };
        case REMOVE_POST:
            return {
                ...state, 
                posts: removePost(state.posts, payload)
            };
        case ADD_POST:
            return {
                ...state, 
                posts: [
                    keyToNumber(payload, 'userId'),
                    ...state.posts
                ]
            };
        default:
            return state;
    }
}
