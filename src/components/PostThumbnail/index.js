import React from "react";
import { Link } from "react-router-dom";

import RemovePost from "components/RemovePost";
import Icon from "components/Icon";

import IconArrowRight from "media/icons/right-arrow.svg";
import { Element, Text } from "./style";

export default function ({ data }) {
    const { id, userId, title } = data;
    const urlToPost = `/user/${userId}/${id}`;

    return (
        <Element>
            <RemovePost postId={id} />
            <Link to={urlToPost}>
                <Text>{title}</Text>
                <Icon src={IconArrowRight} />
            </Link>
        </Element>
    );
}
