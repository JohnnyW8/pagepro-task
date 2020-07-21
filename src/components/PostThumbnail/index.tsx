import React, { memo } from "react";
import { Link } from "react-router-dom";

import RemovePost from "components/RemovePost";
import Icon from "components/Icon";

import { generatePath } from "helpers/generatePath";

import IconArrowRight from "media/icons/right-arrow.svg";
import { Element, Text } from "./style";
import { ROUTES } from "config";
import { IPost } from "store/model";

interface Props {
    data: IPost;
}

const PostThumbnail: React.FC<Props>  = ({ data }) => {
    const { id: postId, userId, title } = data;

    return (
        <Element>
            <RemovePost postId={postId} />
            <Link
                to={generatePath(ROUTES.POST_DETAILS, { id: userId, postId })}
            >
                <Text>{title}</Text>
                <Icon src={IconArrowRight} />
            </Link>
        </Element>
    );
};
export default memo(PostThumbnail);
