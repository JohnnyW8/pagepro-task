import React from "react";
import parse from "html-react-parser";

import { makeAddress, makeCompanyInfo } from "./helpers";
import { Props } from './model';
import { Text, StyledLink } from "./style";

const Details: React.FC<Props> = ({ address, company, email }) => {
    return (
        <>
            <StyledLink href={`mailto:${email}`} title={email} target="_blank">
                {email}
            </StyledLink>
            <Text>{parse(makeAddress(address))}</Text>
            <Text>{parse(makeCompanyInfo(company))}</Text>
        </>
    );
};

export default Details;
