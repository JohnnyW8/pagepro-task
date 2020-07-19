import React from "react";
import IconLoader from "./loader.svg";
import { StyledLoader, Img } from "./style";

const Loader = ({ minHeight = "100px", position = "relative" }) => {
    return (
        <StyledLoader style={{ position, minHeight }}>
            <Img src={IconLoader} alt="Loader" />
        </StyledLoader>
    );
};

export default Loader;
