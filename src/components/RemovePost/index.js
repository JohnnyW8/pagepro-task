import React from 'react';
import { useDispatch } from 'react-redux'
import { useHistory  } from 'react-router-dom';
import { Button } from './style'
import Icon from '../Icon';
import IconTrash from '../../media/icons/trash.svg'
import { removeUserPost } from '../../store/actions/user';

export default function ({userId = null, postId, redirect = false}) {
    const history = useHistory()
    const dispatch = useDispatch();

    const handleOnClick = async () => {
        await dispatch(removeUserPost(Number(postId)));
        redirect && userId && history.push(`/user/${userId}`);
    }

    return (
        <Button onClick={handleOnClick}>
            <Icon src={IconTrash} />
        </Button>
    )

}