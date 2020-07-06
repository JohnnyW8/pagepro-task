import React from 'react';

import Title from '../Title';
import Details from './Details';
import Anchor from './Anchor';

import { Block, Header, Footer } from "./style";

export default function ({data}) {
    const { name, id } = data;

    return (
        <Block>
            <Header>
                <Title title={name} />
                <Details data={data} />
            </Header>
            <Footer>
                <Anchor text='Details' to={`/user/${id}`} />
            </Footer>
        </Block>
    )
}