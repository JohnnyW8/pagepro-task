import React from "react";
import { useSelector } from "react-redux";

import AddPost from "components/AddItem";
import ButtonBack from "components/ButtonBack";
import Posts from "components/Posts";
import Title from "components/Title";

import { ROUTES } from "config";

import { TopBar } from "./style";

const UserDetails = () => {
    const { data: userData } = useSelector((state) => state.user);

    return (
        <>
            <TopBar>
                <ButtonBack to={ROUTES.ROOT} />
                <Title title={userData.name} />
                <AddPost type="post" title="Add post" />
            </TopBar>
            <Posts />
        </>
    );
};

export default UserDetails;
