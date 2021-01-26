import React from 'react';
import {
    Container, 
    FormWrap, 
    Icon, 
    FormContent, 
    Form, 
    FormH1, 
    FormLabel,  
    FormInput, 
    FormButton, 
    Text} from './SigninElements';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">GlobeCoin</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            {/* E-mail */}
                            <FormLabel htmlFor="#">E-Mail</FormLabel>
                            <FormInput type="email" required />
                            {/* Password */}    
                            <FormLabel htmlFor="#">Password</FormLabel>
                            <FormInput type="password" required />
                            {/* Confirm Button */}
                            <FormButton type="submit">Confirm</FormButton>
                            <Text>Forgot Password!</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn;