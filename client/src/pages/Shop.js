import React, { useState, useContext } from 'react';
import { Modal } from '../components/Modal';

import { UserContext, ProductContext } from '../Store';
import './style.css'
import loading from '../assets/images/loading.gif';
import API from '../utils/API';

const Storefront = () => {
    const [products] = useContext(ProductContext);
    const [user] = useContext(UserContext);
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [isShowing, setIsShowing] = useState(false);

    const handleShowModal = e => {
        setIsShowing(true);
    }

    const handleCloseModal = e => {
        setIsShowing(false);        
    }


    const handlePurchase = e => {
        console.log("Item ID is:", e.target.value);
        
        API.getProductData(e.target.value).then(res => {
            console.log(res.data[0])
            setProduct(res.data[0].name);
            setQuantity(res.data[0].quantity);
            setPrice(res.data[0].price);

            console.log(
                'Retrieved info',
                product,
                quantity,
                price
            );
        });
        handleShowModal();
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
                                            <button value={items.id} disabled={items.quantity > 0 ? false : true} onClick={handlePurchase}>Purchase</button>
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
                show={isShowing}
                close={handleCloseModal}
            > {
                !product ? <img id='loading'src={loading}/> 
                :
                <>
                    <h2>Item: {product}</h2>
                    <h2>Current Quantity: {quantity}</h2>
                    <h2>Price: {price}</h2>
                </>

            }

            </Modal>
        </>
    );
};

export default Storefront;
