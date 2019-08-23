import axios from 'axios';

export default {
    getUserData: user => {
        return axios.get('/api/users/' + user);
    },

    getAllProducts: () => {
        return axios.get('/api/products');
    },

    createUser: user => {
        console.log("Front End API", user);
        return axios.post('/api/users', user);
    },
    
    loginUser: user => {
        console.log("API!")
        return axios.post('/api/users/login', user);
    }
}