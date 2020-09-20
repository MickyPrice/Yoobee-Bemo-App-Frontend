const axios = require('axios');

const repository = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
    timeout: 10000, // 10 second
    headers: {
        "Content-Type": "application/json"
    }
});

export default repository;