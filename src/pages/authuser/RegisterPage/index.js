import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Card from '../../../components/Layout/UI/Card';
import './style.css';

const RegisterPage = () => {
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <Layout>
            <div className="registerContainer">
                <Card>
                    <form>
                        <h3> Sign Up</h3>

                        <input 
                            name="firstName"
                            type="text" 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                            placeHolder="First Name" />

                        <input 
                            name="lastName"
                            type="text" 
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                            placeHolder="Last Name" />    

                        <input 
                            name="email"
                            type="text" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeHolder="email" />

                        <input 
                            name="password"
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeHolder="password" />    

                        <div>
                            <button> Sign Up </button>
                        </div>    
                    </form>
                </Card>
            </div> 
        </Layout>
    )
};

export default RegisterPage;