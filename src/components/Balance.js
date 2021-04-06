import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


function Balance(props) {
    return (
        <Container fluid className="py-2">
            <h3>Your Balance</h3>
            <p style={{ textAlign: 'left', color: 'white', backgroundColor: 'rgba(0,0,0,0.4)', padding: 5 }}>$0.00</p>
            <Row className="bal_exp mx-auto">
                <Col xl={6} lg={6} md={6} sm={6} xs={6} className="bal py-2">
                    <h6>Balance</h6>
                    <h4 style={{color: 'green'}}>$0.00</h4>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6} className="exp py-2">
                    <h6>Expense</h6>
                    <h4 style={{color: 'red'}}>$0.00</h4>
                </Col>
            </Row>
        </Container>
    );
}

export default Balance;