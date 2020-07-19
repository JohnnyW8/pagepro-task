import React from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "./style";

export default function ({ text, to }) {
    return (
        <Wrapper>
            <Link to={to}>{text}</Link>
        </Wrapper>
    );
}
