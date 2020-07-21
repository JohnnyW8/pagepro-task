import { MakeAddress, MakeCompanyInfo } from './model';

export const makeAddress: MakeAddress = ({ street, suite, city, zipcode }) => {
    return `
        ${street} ${suite} <br/>
        ${zipcode} ${city}
    `;
};
export const makeCompanyInfo: MakeCompanyInfo = ({ name, catchPhrase, bs }) => {
    return `
        ${name} <br/>
        ${catchPhrase} <br/>
        <b>${bs}</b>
    `;
};