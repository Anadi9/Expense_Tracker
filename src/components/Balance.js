import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GlobalContext } from './../context/GlobalState';


function Balance(props) {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    
    return (
        <Container fluid className="py-2 mb-4">
            <h3>Your Balance</h3>
            <p style={{ textAlign: 'left', color: 'white', backgroundColor: 'rgba(0,0,0,0.4)', padding: 5, boxShadow: '0px 0px 2px white' }}>${total}</p>
            <Row className="bal_exp mx-auto">
                <Col xl={6} lg={6} md={6} sm={6} xs={6} className="inc py-2">
                    <h6>Income</h6>
                    <h4 className="text-success">${income}</h4>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={6} className="exp py-2">
                    <h6>Expense</h6>
                    <h4 className="text-danger">${Math.abs(expense)}</h4>
                </Col>
            </Row>
        </Container>
    );
}

export default Balance;