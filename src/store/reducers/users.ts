import { GET_USERS } from "store/types";

export default function (state = [], action: {type: string, payload: string}) {
    const { type, payload } = action;
    
    switch (type) {
        case GET_USERS:
            return payload;
        default:
            return state;
    }
}
