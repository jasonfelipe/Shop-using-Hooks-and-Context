import React, { useState } from 'react';
import { Input, FormBtn } from '../components/Form';
import API from '../utils/API';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');


    const handleRegister = event => {
        event.preventDefault();
        let user = {
            username: userName,
            password: password,
            email: email,
            firstName: firstName,
            lastName: lastName,
        }
        console.log(user)
        API.createUser(user).then(res => {
            console.log("Response", res);
            console.log(res.statusText);
        }).catch(err => console.log(err));

    };

    return (
        <div>
            <h1>Register!</h1>


            <Input
                name='username'
                onChange={e => setUserName(e.target.value)}
                placeholder="Username"
                value={userName}
            >
            </Input>

            <Input
                name='password'
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                type='password'
                value={password}
            ></Input>

            <Input
                name='firstName'
                onChange={e => setFirstName(e.target.value)}
                placeholder="First Name"
                value={firstName}
            ></Input>

            <Input
                name='lastName'
                onChange={e => setLastName(e.target.value)}
                placeholder="Last Name"
                value={lastName}
            ></Input>

            <Input name='email'
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                type='email'
                value={email}
            ></Input>

            <FormBtn onClick={handleRegister}>Submit</FormBtn>
        </div>
    )
}

export default Register;