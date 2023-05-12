const axios = require('axios');

const instance = axios.default({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

module.exports = instance