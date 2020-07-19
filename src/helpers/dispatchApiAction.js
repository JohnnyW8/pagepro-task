import { toastr } from "react-redux-toastr";
import API from "api";

export const dispatchApiAction = (
    url,
    action,
    {
        successMessage,
        errorMessage = "Something went wrong. Try again.",
        type = "get",
        params,
        itemId,
    } = {}
) => async (dispatch) => {
    try {
        const response = await API[type](url, params);
        const payload = type === "delete" && itemId ? itemId : response.data;
        dispatch({ type: action, payload });
        if (successMessage) {
            toastr.success("", successMessage);
        }
    } catch (error) {
        toastr.error("", errorMessage);
    }
};
