import React from 'react';
import { FormBtn, Input } from '../components/Form';

const Register = () => {
    const [userName, setUserName] = setState('')
    const [password, setPassword] = setState('')
    const [firstName, setFirstName] = setState('')
    const [lastName, setLastName] = setState('')



    const handleInputFields = event => {
        const [name] = event.target;

        setLastName({
            [name]: value
        });

        setFirstName({
            [name]: value
        });

        setPassword({
            [name]: value
        });

        setUserName({
            [name]: value
        });
    }


    const handleRegister = event => {
        event.preventDefault();
        let user = {
            username: username,
            password: password,
            email: email,
            firstName: firstName,
            lastName: lastName,
        }
        console.log(user)
        // API.getUserData(user);

    }
    return (
        <div>
            <h1>Please Login!</h1>

            <span>Username</span>
            <Input name='username'
            
            ></Input>
            <span>Password</span>
            <Input
            name='password'></Input>
            <span>First Name</span>

            <Input name='firstName'></Input>
            <span>Last Name</span>

            <Input></Input>

            <span>Email</span>

            <Input></Input>


        </div>
    )
}

export default Register;