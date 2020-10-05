const axios = require('axios');

const repository = axios.create({
    baseURL: 'http://45.76.121.221',
    withCredentials: true,
    crossorigin: true,
    timeout: 10000, // 10 second
    headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "http://localhost:8080/"
    }
});

export default repository;