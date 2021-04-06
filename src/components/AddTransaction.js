import React, { useState } from 'react';
import { Col, Container, FormControl, InputGroup, Row, Button } from 'react-bootstrap';

function AddTransaction(props) {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <Container fluid className="py-2">
            <h3>Add New Transaction</h3>
            <Row className="mt-3 mx-auto">
                <Col xl={6} lg={6} md={6} sm={10} xs={10} className="mb-4 mx-auto">
                    <h5 className="text-white">Amount Debited</h5>
                    <InputGroup size="sm" className="mb-4">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Text</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={text} onChange={(e) => setText(e.target.value)} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-4">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Amount</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={amount} onChange={(e) => setAmount(e.target.value)} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                    <Button variant="success">Submit</Button>
                </Col>
                <Col xl={6} lg={6} md={6} sm={10} xs={10} className="mb-4 mx-auto">
                    <h5 className="text-white">Amount Credited</h5>
                    <InputGroup size="sm" className="mb-4">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Text</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={text} onChange={(e) => setText(e.target.value)} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-4">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">Amount</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl value={amount} onChange={(e) => setAmount(e.target.value)} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    </InputGroup>
                    <Button variant="danger">Submit</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default AddTransaction;