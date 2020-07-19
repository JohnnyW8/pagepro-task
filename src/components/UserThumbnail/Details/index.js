import React from "react";
import parse from "html-react-parser";

import { Text, StyledLink } from "./style";

const makeAddress = ({ street, suite, city, zipcode }) => {
    return `
        ${street} ${suite} <br/>
        ${zipcode} ${city}
    `;
};
const makeCompanyInfo = ({ name, catchPhrase, bs }) => {
    return `
        ${name} <br/>
        ${catchPhrase} <br/>
        <b>${bs}</b>
    `;
};

const Details = ({ data }) => {
    const { address, company, email } = data;

    return (
        <>
            <StyledLink href={`mailto:${email}`} title={email} target="_blank">
                {email}
            </StyledLink>
            <Text>{parse(makeAddress(address))}</Text>
            <Text>{parse(makeCompanyInfo(company))}</Text>
        </>
    );
}

export default Details; 