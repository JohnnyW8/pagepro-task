import { IAddress, ICompany } from "types";

interface MakeAddress {
    (address: IAddress): string;
}
interface MakeCompanyInfo {
    (company: ICompany): string;
}
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
