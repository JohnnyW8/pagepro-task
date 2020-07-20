import React from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "./style";

interface Props {
    text: string;
    to: string;
}

const Anchor: React.FC<Props> = ({ text, to }) => {
    return (
        <Wrapper>
            <Link to={to}>{text}</Link>
        </Wrapper>
    );
};

export default Anchor;
