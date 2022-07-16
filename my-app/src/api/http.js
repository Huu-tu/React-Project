import axios from 'axios';
const base_url = "http://localhost:3000";

export class Http{
    static get = (endPoint) =>{
        return axios.get(base_url + endPoint)
    }

    static post = (endPoint, payload) =>{
        return axios.post(base_url + endPoint, payload)
    }

    static put = (endPoint, payload) =>{
        return axios.put(base_url + endPoint, payload)
    }

    static delete = (endPoint) =>{
        return axios.delete(base_url + endPoint)
    }
}
