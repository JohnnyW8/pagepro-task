/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";

import { getUsers } from "store/actions/users";

import UserThumbnail from "components/UserThumbnail";
import Loader from "components/Loader";

import useReduxAction from "hooks/useReduxAction";
import { Wrapper } from "./style";

const Users = () => {
    const { users } = useSelector((state) => state);
    const [loadUsers, isLoading] = useReduxAction(() => getUsers());

    useEffect(() => {
        loadUsers();
    }, []);

    const renderUsers = useCallback(() => {
        return users.map((user) => <UserThumbnail key={user.id} data={user} />);
    }, [users]);

    return isLoading ? <Loader /> : <Wrapper>{renderUsers()}</Wrapper>;
}

export default Users;