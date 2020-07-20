import React from "react";
import parse from "html-react-parser";

import { Text, StyledLink } from "./style";

interface MakeAddress {
    (address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    }): string
}
interface MakeCompanyInfo {
    (company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }): string
}

const makeAddress: MakeAddress = ({ street, suite, city, zipcode }) => {
    return `
        ${street} ${suite} <br/>
        ${zipcode} ${city}
    `;
};
const makeCompanyInfo: MakeCompanyInfo = ({ name, catchPhrase, bs }) => {
    return `
        ${name} <br/>
        ${catchPhrase} <br/>
        <b>${bs}</b>
    `;
};

interface Props {
    data: {
        id: number;
        name: string;
        username: string;
        email: string;
        phone: string;
        website: string;
        address: {
            street: string;
            suite: string;
            city: string;
            zipcode: string;
        },
        company: {
            name: string;
            catchPhrase: string;
            bs: string;
        }
    }
}

const Details: React.FC<Props> = ({ data }) => {
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