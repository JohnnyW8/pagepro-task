/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostComments } from "store/actions/post";
import { selectPostComments } from "store/selectors";

import Comment from "components/Comment";
import Loader from "components/Loader";

import useReduxAction from "hooks/useReduxAction";

interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

const Comments = () => {
    const { postId } = useParams();
    const comments = useSelector(selectPostComments);
    const [loadComments, isLoading] = useReduxAction(() =>
        getPostComments(postId)
    );

    const renderComments = () => (
        <>
            {comments.map((comment: Comment) => (
                <Comment key={comment.id} data={comment} />
            ))}
        </>
    );

    useEffect(() => {
        loadComments();
    }, []);

    return isLoading ? <Loader /> : renderComments();
};

export default Comments;
