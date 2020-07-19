import React, { memo } from "react";
import { Element, Wrapper, A, Paragraph, H3 } from "./style";

const Comment = ({ data }) => {
    const { name, email, body } = data;

    return (
        <Element>
            <Wrapper>
                <H3>{name}</H3>
                <A href={`mailto:${email}`}>{email}</A>
            </Wrapper>
            <Paragraph>{body}</Paragraph>
        </Element>
    );
};

export default memo(Comment);
