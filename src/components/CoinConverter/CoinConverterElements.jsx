import styled from 'styled-components';
import { FaAngleDoubleRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, 
    Button, 
    Form, 
    Col, 
    Spinner, 
    Alert,
    Modal } from 'react-bootstrap';    

export const Score = styled(FaAngleDoubleRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const StyledJumbotron = styled(Jumbotron)`
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: #e9ecef;
    border-radius: .3rem;
`;
export const StyledForm = styled(Form)``;
export const StyledCol = styled(Col)`
    padding-top: 5px;
    text-align: center;
    
`;
export const StyledSpinner = styled(Spinner)``;
export const StyledAlert = styled(Alert)`
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
`;
export const StyledModal = styled(Modal)``;
export const StyledButton = styled(Button)`
    border-radius: 50px;
    background: #F9B81F;
    white-space: nowrap;
    padding: ${ ({ big }) => (big ? '14px 48px' : '12px 30px') };
    color: #010606;
    font-size: ${ ({ fontBig }) => (fontBig ? '20px' : '16px') };
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #3b88c3 !important;
        border-color: none;
        color: white;
        outline: none;
        text-decoration: none;
    }
`;


