import React from "react";
import { IPost } from "types";
import { H2, Paragraph } from "./style";

interface Props {
    data: IPost;
}

const Content: React.FC<Props> = ({ data }) => {
    const { title, body } = data;
    return (
        <>
            <H2>{title}</H2>
            <Paragraph>{body}</Paragraph>
        </>
    );
};

export default Content;
