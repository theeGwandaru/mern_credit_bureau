import axios from 'axios';
import { baseUrl } from '../constants';

export default class AuthenticationService {

    login(credentials) {
        return axios.post(baseUrl + '/authenticate', credentials);
    }

    isAuthenticated(){
        let token = localStorage.getItem('token');
        if(token){
            return true;
        }
        else{
            return false;
        }
    }

    getUserByToken(token){
        return axios.get(baseUrl+'/users/activate/'+token);
    }

    setPassword(user){
        return axios.put(baseUrl+'/users', user);
    }
}