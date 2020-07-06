import { GET_USERS } from '../types';


export default function (state = [], action) {
    const { type, payload } = action;
    switch (type) {
        case GET_USERS:
            return payload;
        default:
            return state;
    }
}
