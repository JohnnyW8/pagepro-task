import axios from 'axios';

const API_URL = 'http://jsonplaceholder.typicode.com/';

export default axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
});