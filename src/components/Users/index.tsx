/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { getUsers } from "store/actions/users";
import { selectAllUsers } from "store/selectors";

import UserThumbnail from "components/UserThumbnail";
import Loader from "components/Loader";

import useReduxAction from "hooks/useReduxAction";
import { Wrapper } from "./style";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

const Users: React.FC = () => {
    const users = useSelector(selectAllUsers);
    const [loadUsers, isLoading] = useReduxAction(() => getUsers());

    useEffect(() => {
        loadUsers();
    }, []);

    const renderUsers = () => (
        <Wrapper>
            {users.map((user: User) => (
                <UserThumbnail key={user.id} data={user} />
            ))}
        </Wrapper>
    );

    return isLoading ? <Loader /> : renderUsers();
};

export default Users;
