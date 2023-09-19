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
} from './CoinConverterElements';
import Currencies from './Currencies';
import axios from 'axios';

export function CoinConverter() {
  const [newValue, setNewValue] = useState('1');
  const [coinsFrom, setCoinsFrom] = useState('USD');
  const [coinsFor, setCoinsFor] = useState('BRL');
  const [showSpinner, setShowSpinner] = useState(false);
  const [validatedForm, setValidatedForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [resultConverter, setResultConverter] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);

  function handleValue(event) {
    setNewValue(event.target.value.replace(/\D/g, ''));
  }

  function handleCoinsFrom(event) {
    setCoinsFrom(event.target.value);
  }

  function handleCoinsFor(event) {
    setCoinsFor(event.target.value);
  }

  function handleCloseModal(event) {
    setNewValue('1');
    setCoinsFrom('USD');
    setCoinsFor('BRL');
    setValidatedForm(false);
    setShowModal(false);
  }

  function data(event) {
    event.preventDefault();
    setValidatedForm(true);
    if (event.currentTarget.checkValidity() === true) {
      setShowSpinner(true);

      const options = {
        method: 'GET',
        url: 'https://fixer-fixer-currency-v1.p.rapidapi.com/latest',
        params: {
          base: 'USD',
          symbols:
            'AUD, BRL, BTC, CAD, CHF, CNY, CZK, DKK, EUR, GBP, HKD, IDR, ILS, INR, JPY, KRW, MXN, NZD, SEK, USD, ZAR',
        },
        headers: {
          'x-rapidapi-key':
            '29f0d60460msh39b8cfc1c4e9c38p1944fejsn9cda426b0028',
          'x-rapidapi-host': 'fixer-fixer-currency-v1.p.rapidapi.com',
        },
      };

      axios
        .request(options)
        .then((res) => {
          const price = calculation(res.data, coinsFrom, coinsFor, newValue);
          if (price) {
            setResultConverter(`🪙 ${price}(${coinsFor})`);
            setShowModal(true);
            setErrorMsg(false);
            setShowSpinner(false);
          } else {
            showErrorMsg();
          }
        })
        .catch((err) => showErrorMsg());
    }
  }

  function calculation(data, coinsFrom, coinsFor, newValue) {
    if (!data || data.success !== true) {
      return false;
    }
    const rates = data.rates;
    const priceCoinsFrom = rates[coinsFrom];
    const priceCoinsFor = rates[coinsFor];
    let price;

    if (coinsFor === 'BTC') {
      price = (1 / priceCoinsFrom) * priceCoinsFor * newValue;
      return price.toFixed(8);
    } else {
      price = (1 / priceCoinsFrom) * priceCoinsFor * newValue;
      return price.toFixed(2);
    }
  }

  function showErrorMsg() {
    setErrorMsg(true);
    setShowSpinner(false);
  }

  return (
    <CalculatorContainer id="calculator">
      <StyledAlert variant="danger" show={errorMsg}>
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
                <span className={showSpinner ? null : 'hidden'}>
                  <StyledSpinner animation="border" size="sm" />
                </span>
                <span className={showSpinner ? 'hidden' : null}>Converter</span>
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
