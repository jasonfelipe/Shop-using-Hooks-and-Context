import React, {useContext} from 'react';

import {UserContext, ProductContext} from '../Store';

const Storefront = () => {
    const [products] = useContext(ProductContext);
    const [User] = useContext(UserContext);
    return (
        <>
        <h1>
            Today's Products Are
        </h1>
        
        <ul>
            {products.map((items, index) =>    
                <li key= {index} >
                    {items}
                </li>
            )}
        </ul>
        </>
    );
};
 
export default Storefront;
