import React, { memo } from "react";

import Title from "components/Title";

import { generatePath } from "helpers/generatePath";

import { IUser } from "types";
import Details from "./Details";
import Anchor from "./Anchor";
import { Block, Header, Footer } from "./style";
import { ROUTES } from "config";

interface Props {
    data: IUser;
}

const UserThumbnail: React.FC<Props> = ({ data }) => {
    const { name, id } = data;

    return (
        <Block>
            <Header>
                <Title title={name} />
                <Details {...data} />
            </Header>
            <Footer>
                <Anchor
                    text="Details"
                    to={generatePath(ROUTES.USER_DETAILS, { id })}
                />
            </Footer>
        </Block>
    );
};

export default memo(UserThumbnail);
