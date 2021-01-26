import React from 'react';
import './CoinConverterElements.css';
import { Jumbotron, Button, Form, Col, Spinner } from 'react-bootstrap';
import { Score } from './CoinConverterElements';

function CoinConverter() {
    return (
        <>
            <h1>Coin Converter</h1>
            <Jumbotron>
                <Form>
                    <Form.Row>
                       <Col sm="3">
                        <Form.Control 
                        placeholder="0" 
                        value={1} required/>
                       </Col> 

                       <Col sm="3">
                           <Form.Control as="select">
                               Coins will be added here
                           </Form.Control>
                       </Col> 

                       <Col sm="1" className="text-center" style={{ paddingTop: '5px' }} >
                       <Score />
                       </Col> 
                    
                       <Col sm="3">
                       <Form.Control as="select">
                               Text field
                           </Form.Control>
                       </Col> 

                       <Col sm="2">
                           <Button variant="success" type="submit">
                           <Spinner animation="border" size="sm" />
                            Converter </Button>
                       </Col> 
                    </Form.Row>
                </Form>
            </Jumbotron>
        </>
    )
};

export default CoinConverter;
