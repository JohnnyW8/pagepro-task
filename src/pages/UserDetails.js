import React from 'react';
import { useSelector } from 'react-redux'
import Layout from '../components/Layout';
import { TopBar } from './style'
import ButtonBack from '../components/ButtonBack';
import Title from '../components/Title';
import AddPost from '../components/AddItem';
import Posts from '../components/Posts';

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