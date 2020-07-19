import React from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

import ButtonBack from 'components/ButtonBack';
import Layout from 'components/Layout';
import PostView from 'components/PostView';
import RemovePost from 'components/RemovePost';
import Title from 'components/Title';

import { TopBar } from './style'


const PostDetails = () => {
    const { data: userData } = useSelector(state => state.user);
    const { id: userId, postId } = useParams();
    
    return (
        <Layout>
            <TopBar >
                <ButtonBack to={`/user/${userId}`} />
                <Title title={userData.name} />
                <RemovePost postId={postId} userId={userId} redirect={true} />
            </TopBar>
            <PostView />
        </Layout>
    )
}

export default PostDetails;