import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import ArrowLeft from '../../media/icons/left-arrow.svg'

export default function ({to}) {

    return (
        <Link to={to}>
            <Icon src={ArrowLeft} />
            <span>Back</span>
        </Link>
    )

}