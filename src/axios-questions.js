import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://break-and-learn.firebaseio.com'
})

export default instance;