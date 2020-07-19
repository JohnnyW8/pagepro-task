import React from "react";

import Title from "components/Title";

import { generatePath } from "helpers/generatePath";
import { ROUTES } from "config";

import Details from "./Details";
import Anchor from "./Anchor";
import { Block, Header, Footer } from "./style";

export default function ({ data }) {
    const { name, id } = data;

    return (
        <Block>
            <Header>
                <Title title={name} />
                <Details data={data} />
            </Header>
            <Footer>
                <Anchor
                    text="Details"
                    to={generatePath(ROUTES.USER_DETAILS, { id })}
                />
            </Footer>
        </Block>
    );
}
