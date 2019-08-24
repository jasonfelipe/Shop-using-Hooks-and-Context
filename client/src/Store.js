import React, { useState, useEffect } from 'react';
import API from './utils/API';
export const UserContext = React.createContext([]);
export const ProductContext = React.createContext([]);

const Store = ({ children }) => {


    const [user, setUser] = useState(undefined);
    const [products, setProducts] = useState([]);


    //useEffect uses async methods to put in the data to the page when the page loads.
    useEffect(() => {
        if(sessionStorage.getItem('isLoggedIn')){
            let username = sessionStorage.getItem('username');
            let favProducts = sessionStorage.getItem('favProducts').split(','); 
            setUser({
                name: username,
                favProducts: favProducts
            });
        }
        API.getAllProducts().then(res => setProducts(res.data));
    }, []);


    return (
        <ProductContext.Provider value={[products, setProducts]}>
            <UserContext.Provider value={[user, setUser]}>
                {children}
            </UserContext.Provider>
        </ProductContext.Provider>
    );
};

export default Store;