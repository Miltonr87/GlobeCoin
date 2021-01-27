import React from 'react';
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
    return (
        <>
            <h1>Coin Converter</h1>
            <StyledAlert variant="danger" show={true}>
            Conversion data error! Try again! 
            </StyledAlert>
            <StyledJumbotron>
                <StyledForm>
                    <StyledForm.Row>
                       <StyledCol sm="3">
                        <StyledForm.Control 
                        placeholder="0" 
                        value={1} required/>
                       </StyledCol> 

                       <StyledCol sm="3">
                           <StyledForm.Control as="select">
                               <Currencies />
                           </StyledForm.Control>
                       </StyledCol> 

                       <StyledCol sm="1">
                       <Score />
                       </StyledCol> 
                    
                       <StyledCol sm="3">
                        <StyledForm.Control as="select">
                            <Currencies />
                        </StyledForm.Control>
                       </StyledCol> 

                       <StyledCol sm="2">
                           <StyledButton variant="success" type="submit">
                           <StyledSpinner animation="border" size="sm" />
                            Converter </StyledButton>
                       </StyledCol> 
                    </StyledForm.Row>
                </StyledForm>
                <StyledModal show={false}>
                    <StyledModal.Header closeButton>
                        <StyledModal.Title> Conversion </StyledModal.Title>
                    </StyledModal.Header>
                    <StyledModal.Body>
                    Conversion data  {/*dynamic content to be added*/} 
                    </StyledModal.Body>
                    <StyledModal.Footer>
                       <StyledButton variant="success">
                           New Conversion
                       </StyledButton> 
                    </StyledModal.Footer>
                </StyledModal>
            </StyledJumbotron>
        </>
    )
};

export default CoinConverter;
