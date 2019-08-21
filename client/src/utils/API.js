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
    }
}