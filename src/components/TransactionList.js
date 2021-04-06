import React from 'react';
import { Container } from 'react-bootstrap';

function TransactionList({ transaction }) {
    
    const sign = transaction.amount > 0 ? '+' : '-';
    return (
        <Container style={{backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }} className={transaction.amount < 0 ? 'minus' : 'add'}>
        <li className="my-2">{transaction.text}
                <span style={{ float: 'right' }}>{sign}${Math.abs(transaction.amount)}</span>
            </li>
            </Container>
    );
}

export default TransactionList;