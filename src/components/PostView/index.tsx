/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getUser } from "store/actions/user";
import { getPost } from "store/actions/post";
import { selectPost } from "store/selectors";

import AddComment from "components/AddItem";
import Content from "components/Content";
import Comments from "components/Comments";
import Loader from "components/Loader";

import useReduxAction from "hooks/useReduxAction";
import { ParamTypes } from "types";
import { Button, WrapperButtons } from "./style";

const PostView: React.FC = () => {
    const { id, postId } = useParams<ParamTypes>();
    const post = useSelector(selectPost);
    const [showComments, setShowComments] = useState(false);

    const [loadUser] = useReduxAction(() => getUser(+id));
    const [loadPost, isLoadingPost] = useReduxAction(() => getPost(+postId));

    useEffect(() => {
        loadUser();
        loadPost();
    }, []);

    const handleToggleComments = useCallback(
        () => setShowComments((prev) => !prev),
        []
    );

    return isLoadingPost ? (
        <Loader />
    ) : (
        <>
            <Content data={post} />
            <WrapperButtons>
                <Button onClick={handleToggleComments}>
                    {showComments ? "Hide comments" : "Show comments"}
                </Button>
                {showComments && (
                    <AddComment type="comment" title="Add comment" />
                )}
            </WrapperButtons>
            {showComments && <Comments />}
        </>
    );
};

export default PostView;
