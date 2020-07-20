import React from "react";
import IconLoader from "./loader.svg";
import { StyledLoader, Img } from "./style";

const Loader: React.FC = () => {
    return (
        <StyledLoader>
            <Img src={IconLoader} alt="Loader" />
        </StyledLoader>
    );
};

export default Loader;
