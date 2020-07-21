import { GET_USERS, UsersActionTypes, UsersState } from "store/types";

const initialState: UsersState = [];

export default function (
    state = initialState,
    action: UsersActionTypes
): UsersState {
    const { type, payload } = action;

    switch (type) {
        case GET_USERS:
            return payload;
        default:
            return state;
    }
}
