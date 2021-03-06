import React from "react";
import parse from "html-react-parser";

import { makeAddress, makeCompanyInfo } from "helpers/makeDetails";
import { IUser } from "types";
import { Text, StyledLink } from "./style";

type Props = IUser;

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
