/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

const useReduxAction = (action) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const asyncAction = useCallback(
        (...args) => {
            async function callback() {
                // setLoading(true);
                try {
                    const res = await dispatch(action(...args));
                    setIsError(false);
                    setLoading(false);
                    return res;
                } catch (e) {
                    setLoading(false);
                    setIsError(true);
                    return e;
                }
            }
            callback();
        },
        [action]
    );

    return [asyncAction, loading, isError];
};

export default useReduxAction;
