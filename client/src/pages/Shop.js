import React, { useContext } from 'react';

import { UserContext, ProductContext } from '../Store';
import './style.css'

const Storefront = () => {
    const [products] = useContext(ProductContext);
    const [user] = useContext(UserContext);
    return (
        <>
            <button onClick={() => window.location = '/profile'}>Go To Profile</button>
            {!products ? null :
                <>
                    <h1>
                        Today's Products Are.....
                    </h1>
                    {products ?
                        <table>
                            <tbody>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Purchasable</th>
                                </tr>
                                {products.map((items, index) =>
                                    <tr key={index} >
                                        <td>
                                            {items.id}
                                        </td>
                                        <td>
                                            {items.name}
                                        </td>
                                        <td>
                                            {items.price}
                                        </td>
                                        <td>
                                            {items.quantity}
                                        </td>
                                        <td>
                                            <button disabled={items.quantity > 0 ? false : true} onClick={() => { console.log("HEY YOU WANT TO BUY SOME?") }}>Purchase</button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        : <h2>
                            Error finding products
                          </h2>}
                </>

            }
        </>
    );
};

export default Storefront;
