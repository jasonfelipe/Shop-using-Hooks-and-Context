import React, { useState, useContext } from 'react';
import { Modal } from '../components/Modal';

import { UserContext, ProductContext } from '../Store';
import './style.css'

const Storefront = () => {
    const [products] = useContext(ProductContext);
    const [user] = useContext(UserContext);
    const [product, setProduct] = useState('');
    const [isShowing, setIsShowing] = useState(false);

    const handleShowModal = e => {
        e.preventDefault();
        setIsShowing(true);
    }

    const handleCloseModal = e => {
        e.preventDefault();
        setIsShowing(false);        
    }


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
            <button onClick={handleShowModal}>Open Modal</button>
            <Modal
                product={product}
                show={isShowing}
                close={handleCloseModal}
            >
                <h1>TEST</h1>
            </Modal>
        </>
    );
};

export default Storefront;
