import React, {useState} from 'react';
import API from './utils/API';


export const UserContext = React.createContext("Jason");
export const ProductContext = React.createContext(['Beef', 'Bread', 'Milk']);




const Store = ({children}) => {
    
    const [user, setUser] = useState("Jason");
    const [products, setProducts] = useState(['Beef', 'Bread', 'Milk']);
    
    return (
        <ProductContext.Provider value={[products, setProducts]}>
            <UserContext.Provider value = {[user, setUser]}>
                {children}
            </UserContext.Provider>
        </ProductContext.Provider>
        );
};   

export default Store;