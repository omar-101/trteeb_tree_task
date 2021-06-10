import axios from 'axios';
import config from '../next.config';

const instance = axios.create({
    baseURL: config.env.api,
    withCredentials: true,
});

export default instance;