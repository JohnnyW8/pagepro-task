/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as Yup from "yup";

import { addPost } from "store/actions/user";
import { addComment } from "store/actions/post";

const ValidationPost = Yup.object().shape({
    title: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    body: Yup.string()
        .min(5, "Too Short!")
        .max(500, "Too Long!")
        .required("Required"),
});
const ValidationComment = Yup.object().shape({
    body: Yup.string()
        .min(5, "Too Short!")
        .max(500, "Too Long!")
        .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    name: Yup.string()
        .min(5, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
});

const initPost = {
    title: "",
    body: "",
};
const initComment = {
    email: "",
    name: "",
    body: "",
};
interface FormValues {
    email?: string;
    name?: string;
    title?: string;
    body: string;
}

const useModalFormManagement = (isPostModal: boolean, close: any) => {
    const dispatch = useDispatch();
    const [validationSchema] = useState(
        isPostModal ? ValidationPost : ValidationComment
    );
    const [initialValues] = useState<FormValues>(
        isPostModal ? initPost : initComment
    );
    const { id: userId, postId } = useParams();
    const handleSubmit = useCallback(
        async (values: FormValues, actions: any) => {
            const action = isPostModal
                ? addPost({ ...values, userId })
                : addComment({ ...values, postId });

            await dispatch(action);

            actions.resetForm();
            close();
        },
        []
    );
    return {
        initialValues,
        validationSchema,
        handleSubmit,
    };
};

export default useModalFormManagement;
