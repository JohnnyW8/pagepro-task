import React, { memo } from "react";
import { Element, Wrapper, A, Paragraph, H3 } from "./style";
import { IComment } from "types";

interface Props {
    data: IComment
}

const Comment: React.FC<Props> = ({ data }) => {
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
