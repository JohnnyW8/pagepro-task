import React from 'react'
import { Link } from "react-router-dom";
import RemovePost from '../RemovePost';
import { Element, Text } from './style'
import Icon from '../Icon';
import IconArrowRight from '../../media/icons/right-arrow.svg'

export default function ({data}) {
    const { id, userId, title  } = data;
    const urlToPost = `/user/${userId}/${id}`;

    return (
        <Element>
            <RemovePost postId={id} />
            <Link to={urlToPost} >
                <Text>{title}</Text>
                <Icon src={IconArrowRight} />
            </Link>
        </Element>
    )
}