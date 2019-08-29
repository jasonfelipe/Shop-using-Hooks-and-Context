import axios from 'axios';

export default {
    
    getAllProducts: () => {
        return axios.get('/api/products');
    },

    getProductData: id => {
        console.log('id in api', id);
        return axios.get('/api/products/'+ id)
    },
    
    getUserData: user => {
        return axios.get('/api/users/' + user);
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