import React, { memo } from "react";
import { Link } from "react-router-dom";

import RemovePost from "components/RemovePost";
import Icon from "components/Icon";

import { generatePath } from "helpers/generatePath";
import { ROUTES } from "config";

import IconArrowRight from "media/icons/right-arrow.svg";
import { Element, Text } from "./style";

const PostThumbnail = ({ data }) => {
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
