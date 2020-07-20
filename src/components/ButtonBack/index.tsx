import React from "react";
import { Link } from "react-router-dom";
import Icon from "components/Icon";
import IconArrowLeft from "media/icons/left-arrow.svg";

interface Props {
    to: string;
}

const ButtonBack: React.FC<Props> = ({ to }) => {
    return (
        <Link to={to}>
            <Icon src={IconArrowLeft} />
            <span>Back</span>
        </Link>
    );
};

export default ButtonBack;
