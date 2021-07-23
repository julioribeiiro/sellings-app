import { BASE_URL } from 'utils/requests';
import axios from 'axios';

export default axios.create({
    // baseURL: 'http://localhost:8080/',
    baseURL: `${BASE_URL}`,
    headers: {
        'Content-type': 'application/json',
    },
});
