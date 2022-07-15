import axios from 'axios';
const base_url = "http://localhost:3000";

export class Http{
    static get = (endPoint) =>{
        return axios.get(base_url + endPoint)
    }
}
