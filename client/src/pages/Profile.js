import React, { useContext } from 'react';
import Store, { UserContext, ProductsContext } from '../Store';

const Profile = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <div>
            <h1>Current User Is:</h1>
            {!user ? 
            <h2>
                User Not Found!
            </h2>
            
            :

            <h2>{user.name}</h2>
            }
            <button onClick={() => setUser(undefined)}>Log Out</button>
        </div>
    )
}

export default Profile;