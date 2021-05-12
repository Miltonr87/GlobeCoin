import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Card from '../../../components/Authentication/Card';
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
                        <h3> Register </h3>

                        <input 
                            name="firstName"
                            type="text" 
                            value={firstName} 
                            onChange={(e) => setFirstName(e.target.value)} 
                            placeholder="First Name" />

                        <input 
                            name="lastName"
                            type="text" 
                            value={lastName} 
                            onChange={(e) => setLastName(e.target.value)} 
                            placeholder="Last Name" />    

                        <input 
                            name="email"
                            type="text" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="email" />

                        <input 
                            name="password"
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="password" />    

                        <div>
                            <button> Register </button>
                        </div>    
                    </form>
                </Card>
            </div> 
        </Layout>
    )
};

export default RegisterPage;