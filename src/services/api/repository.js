const axios = require('axios');

const repository = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
    crossorigin: true,
    timeout: 10000, // 10 second
    headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "http://localhost:8080"
    }
});

export default repository;