import { toastr } from 'react-redux-toastr';
import API from '../../api';
import { GET_USERS } from '../types';

export const getUsers = () => async dispatch => {
    let list = [];
    try {
        const response = await API.get("users");
        list = response.data;
    } catch (error) {
        console.error('Error getUsers: ', error)
        toastr.error("","Something went wrong. Try again.");
    }
    dispatch({
        type: GET_USERS,
        payload: list
    })
}