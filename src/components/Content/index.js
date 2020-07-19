import React from "react";
import { H2, Paragraph } from "./style";

const Content = ({ title, body }) => {
    return (
        <>
            <H2>{title}</H2>
            <Paragraph>{body}</Paragraph>
        </>
    );
};

export default Content;
