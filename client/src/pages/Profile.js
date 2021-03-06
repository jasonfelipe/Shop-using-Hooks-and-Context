import React, { useContext, useState } from 'react';
import { UserContext, ProductsContext } from '../Store';
import { Input, FormBtn } from '../components/Form';
import API from '../utils/API';

const Profile = () => {
    const [user, setUser] = useContext(UserContext);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [feedback, setFeedback] = useState('No User Logged In');


    const handleSubmit = event => {
        event.preventDefault();
        let user = {
            username: username,
            password: password
        };
        API.loginUser(user).then(res => {
            console.log(res);
            if (res.data === 'accepted') {
                setUser({
                    name: username,
                    favProducts: null
                });

                storeLoginStatus(username);
            } else {
                setFeedback(res.data.error);
            };
        });
    };

    const storeLoginStatus = (username, favProducts) => {
        sessionStorage.setItem('isLoggedIn', true);
        sessionStorage.setItem('username', username);
        sessionStorage.setItem('favProducts', undefined);
    };

    const logoutUser = () => {
        sessionStorage.clear();
        window.location.reload();
    }

    return (
        <div>
            <button onClick={() => window.location = '/'}>Go To Shop</button>
            {!user ?

                <>
                    <h2>
                        {feedback}
                    </h2>
                    <Input onChange={e => setUserName(e.target.value)} name='username' placeholder="Username">
                    </Input>
                    <Input onChange={e => setPassword(e.target.value)} name='password' placeholder="Password" type="password">
                    </Input>
                    <FormBtn onClick={handleSubmit}>Login</FormBtn>


                    <button onClick={() => { console.log("Hey"); window.location = '/register'; }}>Create User</button>
                </>
                :
                <>
                    <h1>Current User Is:</h1>
                    <h2>{user.name}</h2>

                    <h1>Favorite Products Are:</h1>

                    {user.favProducts === undefined ? user.favProducts.map(products =>
                        <li key={products}>
                            {products}
                        </li>)
                        :
                        <li>
                            NO PRODUCTS FOUND!
                        </li>
                        }

                    <button onClick={e => { logoutUser(); }}>Logout</button>
                </>
            }
        </div>
    )
};

export default Profile;