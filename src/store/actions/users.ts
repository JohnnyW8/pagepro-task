import { Dispatch } from "redux";
import { GET_USERS } from "store/types";
import { dispatchApiAction } from "helpers/dispatchApiAction";

export const getUsers = () => async (dispatch: Dispatch) => {
    dispatch(dispatchApiAction("users", GET_USERS));
};
