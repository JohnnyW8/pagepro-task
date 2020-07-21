/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { getUsers } from "store/actions/users";
import { selectAllUsers } from "store/selectors";

import UserThumbnail from "components/UserThumbnail";
import Loader from "components/Loader";

import useReduxAction from "hooks/useReduxAction";
import { Wrapper } from "./style";

const Users: React.FC = () => {
    const users = useSelector(selectAllUsers);
    const [loadUsers, isLoading] = useReduxAction(() => getUsers());

    useEffect(() => {
        loadUsers();
    }, []);

    const renderUsers = () => (
        <Wrapper>
            {users.map((user) => (
                <UserThumbnail key={user.id} data={user} />
            ))}
        </Wrapper>
    );

    return isLoading ? <Loader /> : renderUsers();
};

export default Users;
