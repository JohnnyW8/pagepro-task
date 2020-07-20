import React from "react";
import { Img } from "./style";

interface Props {
    src: string;
}

const Icon: React.FC<Props> = ({ src }) => {
    return <Img src={src} alt="Icon" />;
};

export default Icon;
