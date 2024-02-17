// api.js
import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://600eda693bb1d100179e04dc.mockapi.io/api/v1',
});

export default Api;
