import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { removeUserPost } from "store/actions/user";

import Icon from "components/Icon";
import IconTrash from "media/icons/trash.svg";
import { Button } from "./style";

interface Props {
    postId: number;
    userId?: number;
    redirect?: boolean;
}

const RemovePost: React.FC<Props> = ({ userId = null, postId, redirect = false }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleOnClick = async () => {
        await dispatch(removeUserPost(Number(postId)));
        redirect && userId && history.push(`/user/${userId}`);
    };

    return (
        <Button onClick={handleOnClick}>
            <Icon src={IconTrash} />
        </Button>
    );
};

export default RemovePost;
