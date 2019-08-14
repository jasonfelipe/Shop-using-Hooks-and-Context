import React, { useState, useEffect } from 'react';
import API from './utils/API';
export const UserContext = React.createContext([]);
export const ProductContext = React.createContext([]);

const Store = ({ children }) => {

    

    const [user, setUser] = useState(undefined);
    const [products, setProducts] = useState([]);


    useEffect(() => {
        API.getAllProducts().then(res => setProducts(res.data));
    }, [])

    console.log(user);

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            <UserContext.Provider value={[user, setUser]}>
                {children}
            </UserContext.Provider>
        </ProductContext.Provider>
    );
};

export default Store;