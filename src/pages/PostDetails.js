import React from 'react';
import { useSelector } from 'react-redux'
import Layout from '../components/Layout';
import { TopBar } from './style'
import ButtonBack from '../components/ButtonBack';
import Title from '../components/Title';
import RemovePost from '../components/RemovePost';
import { useParams } from 'react-router-dom';
import PostView from '../components/PostView';


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