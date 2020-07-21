interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}
interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface Props {
    address: Address;
    company: Company;
    email: string;
}

export interface MakeAddress {
    (address: Address): string;
}
export interface MakeCompanyInfo {
    (company: Company): string;
}
