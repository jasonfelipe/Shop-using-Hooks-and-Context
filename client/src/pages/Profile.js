import React, { useContext, useState } from 'react';
import { UserContext, ProductsContext } from '../Store';
import { Input, FormBtn } from '../components/Form';
import API from '../utils/API';

const Profile = () => {
    const [user, setUser] = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handlePasswordInput = event => {
        const { name, value } = event.target;
        setPassword({
            [name]: value
        });
    };

    const handleUsernameInput = event => {
        const { name, value } = event.target;
        setUsername({
            [name]: value
        });
    };


    const handleSubmit = event => {
        event.preventDefault();
        let user = {
            username: username,
            password: password
        }
        console.log(user)
        // API.getUserData(user);

    }

    return (
        <div>
            <button onClick={() => window.location = '/shop'}>Go To Shop</button>
            {!user ?
                <>
                    <h2>
                        You Are Not Logged In!
                </h2>
                    <Input onChange={handleUsernameInput} name='username' placeholder="Username">
                    </Input>
                    <Input onChange={handlePasswordInput} name='password' placeholder="Password" type="password">
                    </Input>
                    <FormBtn onClick={handleSubmit}>Login</FormBtn>


                    <button onClick={() => console.log("Hey")}>Create User</button>
                </>
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





            {/* {!user ? 
            <button onClick={() => setUser({name: 'Jason', id: 1, favProducts: ['Chicken', 'Cake', 'Orange Juice']})}>Login as Jason</button>
            :
            <button onClick={() => setUser(undefined)}>Log Out</button>
            } */}
        </div>
    )
}

export default Profile;