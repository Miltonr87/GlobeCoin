import React, { useState } from 'react';
import './CoinConverterElements.css';
import { 
    Score,
    StyledJumbotron, 
    StyledButton, 
    StyledForm, 
    StyledCol,
    StyledSpinner, 
    StyledAlert,
    StyledModal } from './CoinConverterElements';
import Currencies from './Currencies';    

function CoinConverter() {
    const [value, setValue] = useState('1');
    const [coinsName, setCoinsName] = useState('USD');
    const [coinsConverter, setCoinsConverter] = useState('BTC');
    const [showSpinner, setShowSpinner] = useState(false);
    const [validatedForm, setValidatedForm] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [resultConverter, setResultConverter] = useState('');

    function handleValue(event) {
        setValue(event.target.value.replace(/\D/g, '')); 
        /* Take all non-numbers types and replace with ''*/
    }

    function handleCoinsName(event) {
        setCoinsName(event.target.value);
    }

    function handleCoinsConverter(event) {
        setCoinsConverter(event.target.value);
    }

    function handleClosedModal(event) {
        setValue('1');
        setCoinsName('USD');
        setCoinsConverter('BTC');
        setValidatedForm(false);
        setShowModal(false);
    }

    function converter(event) {
        event.preventDefault();
        setValidatedForm(true);
        if (event.currentTarget.checkValidity() === true) {
            setShowModal(true);
        } else {
            alert('Incorrect')
        }
    }

    return (
        <>
            <h1>Coin Converter</h1>
            <StyledAlert variant="danger" show={true}>
            Conversion data error! Try again! 
            </StyledAlert>
            <StyledJumbotron>
                <StyledForm 
                onSubmit={converter} 
                noValidate 
                validated={validatedForm}>
                    <StyledForm.Row>
                       <StyledCol sm="3">
                        <StyledForm.Control 
                        placeholder="0" 
                        value={value} 
                        onChange={handleValue}
                        required/>
                       </StyledCol> 

                       <StyledCol sm="3">
                           <StyledForm.Control as="select"
                           value={coinsName}
                           onChange={handleCoinsName}
                           >
                               <Currencies />
                           </StyledForm.Control>
                       </StyledCol> 

                       <StyledCol sm="1">
                       <Score />
                       </StyledCol> 
                    
                       <StyledCol sm="3">
                        <StyledForm.Control as="select"
                        value={coinsConverter}
                        onChange={handleCoinsConverter}
                        >
                            <Currencies />
                        </StyledForm.Control>
                       </StyledCol> 

                       <StyledCol sm="2">
                           <StyledButton variant="success" type="submit">
                                <span className= {showSpinner ? null : 'hidden' }>
                                    <StyledSpinner animation="border" size="sm" />
                                </span>
                                <span className= {showSpinner ? 'hidden' : null}>
                                    Converter 
                                </span>
                            </StyledButton>
                       </StyledCol> 
                    </StyledForm.Row>
                </StyledForm>

                <StyledModal show={showModal} onHide={handleClosedModal}>
                    <StyledModal.Header closeButton>
                        <StyledModal.Title> Conversion </StyledModal.Title>
                    </StyledModal.Header>
                    <StyledModal.Body>
                    {resultConverter}  {/*dynamic content to be added*/} 
                    </StyledModal.Body>
                    <StyledModal.Footer>
                       <StyledButton variant="success" onClick={handleClosedModal}>
                           New Conversion
                       </StyledButton> 
                    </StyledModal.Footer>
                </StyledModal>
            </StyledJumbotron>
        </>
    )
};

export default CoinConverter;
