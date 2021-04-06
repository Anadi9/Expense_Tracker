import React, {useContext} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GlobalContext } from './../context/GlobalState';
import TransactionList from './TransactionList';

function Transaction(props) {

    const {transactions} = useContext(GlobalContext);

    //console.log(context);

    return (
        <Container fluid className="py-2 mb-4">
            <h3>Transactions</h3>
            <Row >
                <ul style={{listStyle: 'none', textAlign: 'left'}}>
                    {transactions.map(transaction => (
                        <TransactionList transaction={transaction} key={transaction.id}/>
                    ))}
                </ul>
            </Row>
        </Container>
    );
}

export default Transaction;