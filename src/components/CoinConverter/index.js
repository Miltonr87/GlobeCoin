import React, { useState } from "react";
import "./CoinConverterElements.css";
import {
  CalculatorContainer,
  Score,
  StyledJumbotron,
  StyledButton,
  StyledForm,
  StyledCol,
  StyledSpinner,
  StyledAlert,
  StyledModal,
} from "./CoinConverterElements";
import Currencies from "./Currencies";
import axios from "axios";

export function CoinConverter() {
  const FIXER_URL =
    "http://data.fixer.io/api/latest?access_key=69493af1c0b2f3dd840d8a42f3ce2e04"; // API Key

  const [newValue, setNewValue] = useState("1");
  const [coinsFrom, setCoinsFrom] = useState("USD");
  const [coinsFor, setCoinsFor] = useState("BTC");
  const [showSpinner, setShowSpinner] = useState(false);
  const [validatedForm, setValidatedForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [resultConverter, setResultConverter] = useState("");

  function handleValue(event) {
    setNewValue(event.target.value.replace(/\D/g, ""));
    // Take all non-numbers types and replace with ''//
  }

  function handleCoinsFrom(event) {
    setCoinsFrom(event.target.value);
  }

  function handleCoinsFor(event) {
    setCoinsFor(event.target.value);
  }

  function handleCloseModal(event) {
    setNewValue("1");
    setCoinsFrom("USD");
    setCoinsFor("BTC");
    setValidatedForm(false);
    setShowModal(false);
  }

  function data(event) {
    event.preventDefault();
    setValidatedForm(true);
    if (event.currentTarget.checkValidity() === true) {
      setShowSpinner(true);
      axios.get(FIXER_URL).then((res) => {
        const price = calculation(res.data);
        setResultConverter(`${newValue} ${coinsFrom} = ${price} ${coinsFor}`);
        setShowModal(true);
        setShowSpinner(false);
      });
    }
  }

  function calculation(data) {
    if (!data || data.success !== true) {
      return false;
    }
    const priceCoinsFrom = data.rates[coinsFrom];
    const priceCoinsFor = data.rates[coinsFor];
    const price = (1 / priceCoinsFrom) * priceCoinsFor * newValue;
    return price.toFixed(8); // I put 8 digits only for BitCoin calculations
  }

  return (
    <CalculatorContainer id="calculator">
      
      <StyledAlert variant="danger" show={false} >
        Conversion data error! Try again!
      </StyledAlert>
      <StyledJumbotron>
        <StyledForm onSubmit={data} noValidate validated={validatedForm}>
          <StyledForm.Row>
            <StyledCol sm="3">
              <StyledForm.Control
                placeholder="0"
                value={newValue}
                onChange={handleValue}
                required
              />
            </StyledCol>

            <StyledCol sm="3">
              <StyledForm.Control
                as="select"
                value={coinsFrom}
                onChange={handleCoinsFrom}
              >
                <Currencies />
              </StyledForm.Control>
            </StyledCol>

            <StyledCol sm="1">
              <Score />
            </StyledCol>

            <StyledCol sm="3">
              <StyledForm.Control
                as="select"
                value={coinsFor}
                onChange={handleCoinsFor}
              >
                <Currencies />
              </StyledForm.Control>
            </StyledCol>

            <StyledCol sm="2">
              <StyledButton variant="success" type="submit">
                <span className={showSpinner ? null : "hidden"}>
                  <StyledSpinner animation="border" size="sm" />
                </span>
                <span className={showSpinner ? "hidden" : null}>Converter</span>
              </StyledButton>
            </StyledCol>
          </StyledForm.Row>
        </StyledForm>

        <StyledModal show={showModal} onHide={handleCloseModal}>
          <StyledModal.Header closeButton>
            <StyledModal.Title> Conversion </StyledModal.Title>
          </StyledModal.Header>
          <StyledModal.Body>
            {resultConverter} {/*dynamic content from Fixer Array*/}
          </StyledModal.Body>
          <StyledModal.Footer>
            <StyledButton onClick={handleCloseModal}>
              New Conversion
            </StyledButton>
          </StyledModal.Footer>
        </StyledModal>
      </StyledJumbotron>
      </CalculatorContainer>
  );
}

export default CoinConverter;
