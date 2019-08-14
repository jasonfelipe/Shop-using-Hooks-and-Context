import React, { useContext } from 'react';
import { UserContext, ProductsContext } from '../Store';

const Profile = () => {
    const [user, setUser] = useContext(UserContext);


    return (
        <div>
            <button onClick={() => window.location = '/shop'}>Go To Shop</button>
            {!user ? 
            <h2>
                User Not Found!
            </h2>
            :
            <>
            <h1>Current User Is:</h1>
            <h2>{user.name}</h2>

            <h1>Favorite Products Are:</h1>
            
            {user.favProducts.map(products =>     
                <li key={products}>
                    {products}
                </li>)}
            </>
        }
        
            {!user ? 
            <button onClick={() => setUser({name: 'Jason', id: 1, favProducts: ['Chicken', 'Cake', 'Orange Juice']})}>Login as Jason</button>
            :
            <button onClick={() => setUser(undefined)}>Log Out</button>
            }
        </div>
    )
}

export default Profile;