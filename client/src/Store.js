import React, { useState } from 'react';
import API from './utils/API';

const placeHolderUser = { name: 'Jason', id: 1, favProducts: ["Chicken", "Cake", "Orange Juice"] };
const dbData = API.getAllProducts()


export const UserContext = React.createContext(placeHolderUser);
export const ProductContext = React.createContext(dbData);




const Store = ({ children }) => {


    const [user, setUser] = useState(placeHolderUser);
    const [products, setProducts] = useState(dbData);

    return (
        <ProductContext.Provider value={[products, setProducts]}>
            <UserContext.Provider value={[user, setUser]}>
                {children}
            </UserContext.Provider>
        </ProductContext.Provider>
    );
};

export default Store;