import axios from 'axios';

const API_URL = 'http://jsonplaceholder.typicode.com/';

const API = axios.create({
    baseURL: API_URL,
    responseType: 'json',
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
});

export default API