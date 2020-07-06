import { 
    GET_POST,
    GET_POST_COMMENTS,
    ADD_POST_COMMENT
} from '../types';
import { keyToNumber } from '../../helpers/keyToNumber';

const initialState = {
    data: {},
    comments: []
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_POST: 
            return {
                ...state, 
                data: payload
            };
        case GET_POST_COMMENTS:
            return {
                ...state, 
                comments: payload
            };
        case ADD_POST_COMMENT:
            return {
                ...state, 
                comments: [
                    keyToNumber(payload, 'postId'),
                    ...state.comments
                ]
            };
        default:
            return state;
    }
}