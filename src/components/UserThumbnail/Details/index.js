import React from "react";
import parse from "html-react-parser";

import { Div, A } from "./style";

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

export default function ({ data }) {
    const { address, company, email } = data;

    return (
        <>
            <A href={`mailto:${email}`} title={email} target="_blank">
                {email}
            </A>
            <Div>{parse(makeAddress(address))}</Div>
            <Div>{parse(makeCompanyInfo(company))}</Div>
        </>
    );
}
