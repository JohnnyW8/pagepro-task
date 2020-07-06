/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PostThumbnail from "../PostThumbnail";
import { getUser, getUserPosts } from "../../store/actions/user";
import useReduxAction from "../../hooks/useReduxAction";
import Loader from "../Loader";

export default function () {
    const { id } = useParams();
    const { posts } = useSelector(state => state.user);
    const [loadUser] = useReduxAction(() => getUser(id));
    const [loadUserPosts, isLoadingPosts] = useReduxAction(() =>
        getUserPosts(id)
    );

    useEffect(() => {
        loadUserPosts();

        loadUser();
    }, []);

    const renderPosts = useCallback(() => {
        return posts.map((post) => <PostThumbnail key={post.id} data={post} />);
    }, [posts]);

    return <>{isLoadingPosts ? <Loader /> : renderPosts()}</>;
}
