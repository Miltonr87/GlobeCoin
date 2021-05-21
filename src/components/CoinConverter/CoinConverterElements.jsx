import styled from "styled-components";
import { FaAngleDoubleRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Jumbotron,
  Button,
  Form,
  Col,
  Spinner,
  Alert,
  Modal,
} from "react-bootstrap";

export const CalculatorContainer = styled.div`
  background-color: none;
  .hidden {
    display: none;
}
`;

export const Score = styled(FaAngleDoubleRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const StyledJumbotron = styled(Jumbotron)`
  padding: 2rem;
  margin-top: 0.2px;
  margin-bottom: 0.2px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #e9ecef;
  border-radius: 1.3rem;

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;
export const StyledForm = styled(Form)``;
export const StyledCol = styled(Col)`
  padding-top: 5px;
  text-align: center;
`;
export const StyledSpinner = styled(Spinner)``;
export const StyledAlert = styled(Alert)`
  color: green;
  text-align: center;
  background-color: #010606;
  border-color: #010606;
`;
export const StyledModal = styled(Modal)``;
export const StyledButton = styled(Button)`
  border-radius: 50px;
  background: #f9b81f;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #010606;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  text-decoration: none;
  border: none;
  outline: none;
  cursor: pointer;
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
