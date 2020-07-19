import React from "react";
import { Link } from "react-router-dom";
import Icon from "components/Icon";
import IconArrowLeft from "media/icons/left-arrow.svg";

export default function ({ to }) {
    return (
        <Link to={to}>
            <Icon src={IconArrowLeft} />
            <span>Back</span>
        </Link>
    );
}
