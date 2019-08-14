import React, { useContext } from 'react';

import { UserContext, ProductContext } from '../Store';

const Storefront = () => {
    const [products] = useContext(ProductContext);
    const [user] = useContext(UserContext);
    return (
        <>
        <button onClick={() => window.location = '/profile'}>Go To Profile</button>
            <h1>
                Today's Products Are.....
            </h1>

            <ul>
                {products.map((items, index) =>
                    <li key={index} >
                        {items.name}
                    </li>
                )}
            </ul>
        </>
    );
};

export default Storefront;
