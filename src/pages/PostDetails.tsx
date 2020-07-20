import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ButtonBack from "components/ButtonBack";
import PostView from "components/PostView";
import RemovePost from "components/RemovePost";
import Title from "components/Title";

import { selectUserData } from "store/selectors";

import { generatePath } from "helpers/generatePath";
import { ROUTES } from "config";

import { TopBar } from "./style";

const PostDetails: React.FC = () => {
    const userData = useSelector(selectUserData);
    const { id, postId } = useParams();

    return (
        <>
            <TopBar>
                <ButtonBack to={generatePath(ROUTES.USER_DETAILS, { id })} />
                <Title title={userData.name} />
                <RemovePost postId={postId} userId={id} redirect={true} />
            </TopBar>
            <PostView />
        </>
    );
};

export default PostDetails;
