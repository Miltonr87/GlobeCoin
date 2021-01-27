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
`;


