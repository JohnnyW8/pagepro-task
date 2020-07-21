import { Dispatch } from "redux";
import { toastr } from "react-redux-toastr";
import API from "api";

type ApiTypes = "get" | "post" | "delete";
interface DispatchApiAction {
    (
        url: string,
        action: string,
        options?: {
            type?: ApiTypes;
            errorMessage?: string;
            successMessage?: string;
            params?: any;
            itemId?: number;
        }
    ): any;
}

export const dispatchApiAction: DispatchApiAction = (
    url: string,
    action: string,
    options?: {
        errorMessage?: string;
        type?: ApiTypes;
        successMessage?: string;
        params?: object;
        itemId?: number;
    }
) => async (dispatch: Dispatch) => {
    const {
        errorMessage = "Something went wrong. Try again.",
        type = "get",
        successMessage,
        params,
        itemId,
    } = options || {};

    try {
        let response;
        switch (type) {
            case "get":
                response = await API.get(url);
                break;
            case "post":
                response = await API.post(url, params);
                break;
            case "delete":
                response = await API.delete(url);
                break;
        }
        // const response = await API[type](url, params);
        const payload = type === "delete" && itemId ? itemId : response.data;

        dispatch({ type: action, payload });
        if (successMessage) {
            toastr.success("", successMessage);
        }
    } catch (error) {
        toastr.error("", errorMessage);
    }
};
