import React from "react";
import { H2, Paragraph } from "./style";

interface Props {
    data: {
        id: number;
        userId: number;
        title: string;
        body: string;
    }

}

const Content: React.FC<Props> = ({data}) => {
    const { title, body } = data;
    return (
        <>
            <H2>{title}</H2>
            <Paragraph>{body}</Paragraph>
        </>
    );
};

export default Content;
