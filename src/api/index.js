import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://laravelapi-production-cb4a.up.railway.app'
})
export default Api