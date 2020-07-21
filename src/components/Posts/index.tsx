/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getUser, getUserPosts } from "store/actions/user";
import { selectAllPosts } from "store/selectors";

import PostThumbnail from "components/PostThumbnail";
import Loader from "components/Loader";

import useReduxAction from "hooks/useReduxAction";

const Posts = () => {
    const { id } = useParams<{ id: string }>();
    const posts = useSelector(selectAllPosts);
    const [loadUser] = useReduxAction(() => getUser(+id));
    const [loadUserPosts, isLoadingPosts] = useReduxAction(() =>
        getUserPosts(+id)
    );

    useEffect(() => {
        loadUserPosts();
        loadUser();
    }, []);

    const renderPosts = () => (
        <>
            {posts.map((post) => (
                <PostThumbnail key={post.id} data={post} />
            ))}
        </>
    );

    return isLoadingPosts ? <Loader /> : renderPosts();
};

export default Posts;
