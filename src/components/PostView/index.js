/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { toastr } from "react-redux-toastr";

import { getUser } from "store/actions/user";
import { getPost } from "store/actions/post";

import AddComment from "components/AddItem";
import Content from "components/Content";
import Comments from "components/Comments";
import Loader from "components/Loader";

import useReduxAction from "hooks/useReduxAction";
import { Button, WrapperButtons } from "./style";

const hideMessage = "Hide comments";
const showMessage = "Show comments";

export default function () {
    const { id, postId } = useParams();
    const history = useHistory();
    const { post } = useSelector((state) => state);
    const [showComments, setShowComments] = useState(false);

    const [loadUser] = useReduxAction(() => getUser(id));
    const [loadPost, isLoadingPost, isErrorPost] = useReduxAction(() =>
        getPost(postId)
    );

    useEffect(() => {
        loadUser();
        loadPost();
    }, []);

    const handleToggleComments = useCallback(
        () => setShowComments((prev) => !prev),
        []
    );

    if (isErrorPost && id) {
        console.log("esr");

        toastr.warning("Fetch post data", "Something went wrong. Try again.");
        history.push(`/user/${id}`);
    }

    return isLoadingPost ? (
        <Loader />
    ) : (
        <>
            <Content {...post.data} />
            <WrapperButtons>
                <Button onClick={handleToggleComments}>
                    {showComments ? hideMessage : showMessage}
                </Button>
                {showComments && (
                    <AddComment type="comment" title="Add comment" />
                )}
            </WrapperButtons>
            {showComments && <Comments />}
        </>
    );
}
