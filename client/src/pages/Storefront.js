import React, {useContext} from 'react';

import {ProductContext} from '../Store';

const Storefront = () => {
    const [products] = useContext(ProductContext);

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
