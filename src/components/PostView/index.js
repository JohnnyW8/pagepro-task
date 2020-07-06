/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getUser } from "../../store/actions/user";
import { getPost } from "../../store/actions/post";
import Content from "../Content";
import Comments from "../Comments";
import AddComment from "../AddItem";
import Loader from "../Loader";
import { Button, WrapperButtons } from "./style";
import { toastr } from 'react-redux-toastr'
import useReduxAction from "../../hooks/useReduxAction";

const hideMessage = "Hide comments";
const showMessage = "Show comments";

export default function () {
    const { id, postId } = useParams();
    const history = useHistory()
    const { post } = useSelector((state) => state);
    const [showComments, setShowComments] = useState(false);
    const [buttonText, setButtonText] = useState(null);

    const [loadUser] = useReduxAction(() => getUser(id));
    const [loadPost, isLoadingPost, isErrorPost] = useReduxAction(() => getPost(postId));

    useEffect(() => {
        loadUser();
        loadPost();
    }, []);

    useEffect(() => {
        setButtonText(showComments ? hideMessage : showMessage);
    }, [showComments]);

    const handleToggleComments = useCallback(
        () => setShowComments((prev) => !prev),
        []
    );
    
    if (isErrorPost && id) {
        console.log('esr');
        
        toastr.warning('Fetch post data', "Something went wrong. Try again.");
        history.push(`/user/${id}`);
    }
        
    return isLoadingPost ? (
        <Loader />
    ) : (
        <>
            <Content {...post.data} />
            <WrapperButtons>
                <Button onClick={handleToggleComments}>
                    {buttonText}
                </Button>
                {showComments && <AddComment type="comment" title="Add comment" />}
            </WrapperButtons>
            {showComments && <Comments />}
        </>
    );
}
