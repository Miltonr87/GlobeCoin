import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Card from '../../../components/Layout/UI/Card';
import './style.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Layout>
            <div className="loginContainer">
                <Card>
                    <form>
                        <input 
                            name="email"
                            type="text" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.email)} 
                            placeHolder="email" />

                        <input 
                            name="password"
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.email)} 
                            placeHolder="password" />    

                        <div>
                            <button> Login </button>
                        </div>    
                    </form>
                </Card>
            </div> 
        </Layout>
    )
};

export default LoginPage;