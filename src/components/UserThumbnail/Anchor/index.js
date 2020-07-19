import React from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "./style";

const Anchor = ({ text, to }) => {
    return (
        <Wrapper>
            <Link to={to}>{text}</Link>
        </Wrapper>
    );
};

export default Anchor;
