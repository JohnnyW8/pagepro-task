import { Dispatch } from "redux";
import { GET_USERS, AppThunk } from "store/types";
import { dispatchApiAction } from "helpers/dispatchApiAction";

export const getUsers = (): AppThunk => async (dispatch: Dispatch) => {
    dispatch(dispatchApiAction("users", GET_USERS));
};
