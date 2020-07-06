/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostComments } from "../../store/actions/post";
import Comment from "../Comment";
import useReduxAction from "../../hooks/useReduxAction";
import Loader from "../Loader";

export default function () {
    const { postId } = useParams();
    const { comments } = useSelector((state) => state.post);
    const [loadComments, isLoading] = useReduxAction(() =>
        getPostComments(postId)
    );

    const renderComments = useCallback(() => {
        return comments.map((comment) => (
            <Comment key={comment.id} data={comment} />
        ));
    }, [comments]);

    useEffect(() => {
        loadComments();
    }, []);

    return isLoading ? <Loader /> : renderComments();
}