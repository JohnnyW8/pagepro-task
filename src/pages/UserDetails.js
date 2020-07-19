import React from 'react';
import { useSelector } from 'react-redux'

import AddPost from 'components/AddItem';
import ButtonBack from 'components/ButtonBack';
import Layout from 'components/Layout';
import Posts from 'components/Posts';
import Title from 'components/Title';

import { TopBar } from './style'

const UserDetails = () => {
    const { data: userData } = useSelector(state => state.user);

    return (
        <Layout>
            <TopBar>
                <ButtonBack to="/" />
                <Title title={userData.name} />
                <AddPost type="post" title="Add post" />
            </TopBar>
            <Posts />
        </Layout>
    )
}

export default UserDetails;