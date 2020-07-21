import React from "react";
import { H2 } from "./style";

interface Props {
    title: string;
}

const Title: React.FC<Props> = ({ title }) => {
    return <H2>{title}</H2>;
};

export default Title;
