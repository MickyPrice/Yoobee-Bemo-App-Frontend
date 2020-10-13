const axios = require('axios');

// Api Builder
// Builds and sends requests
const repository = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    withCredentials: true,
    crossorigin: true,
    timeout: 10000, // 10 second
    headers: {
        "Content-Type": "application/json",
    }
});

export default repository;