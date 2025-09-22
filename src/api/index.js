import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://infocus-news-api-master-6bwklg.laravel.cloud'
})

export default Api
