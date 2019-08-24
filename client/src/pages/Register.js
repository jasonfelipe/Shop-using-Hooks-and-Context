import React, { useState } from 'react';
import { Input, FormBtn } from '../components/Form';
import API from '../utils/API';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState(undefined);

    const handleRegister = event => {
        event.preventDefault();
        let user = {
            username: userName,
            password: password,
            email: email,
            firstName: firstName,
            lastName: lastName,
        }
        API.createUser(user).then(res => {
            if (res.data.error) {
                return setFeedback(res.data.error);
            };
            return setFeedback("REGISTER COMPLETE!");
        }).catch(err => console.log(err));

    };

    return (
        <div>
            <h1>Register!</h1>
            {feedback ?
                <h2>
                    {feedback}
                </h2> :
                <h2>
                    Please Enter Your Information!
            </h2>
            }


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
            <button onClick={() => window.location = '/profile'}>Back To Profile</button>
        </div>
    )
}

export default Register;