/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import UserThumbnail from "../UserThumbnail";
import Loader from "../Loader";
import { Wrapper } from "./style";
import { getUsers } from "../../store/actions/users";
import useReduxAction from "../../hooks/useReduxAction";

export default function () {
    const { users } = useSelector(state => state);
    const [loadUsers, isLoading] = useReduxAction(() => getUsers());

    useEffect(() => {
        loadUsers();
    }, []);

    const renderUsers = useCallback(() => {
        return users.map((user) => <UserThumbnail key={user.id} data={user} />);
    }, [users]);
    
    return isLoading ? <Loader /> : <Wrapper>{renderUsers()}</Wrapper>;
}
