import React from 'react';
import { Container } from 'react-bootstrap';

function Header(props) {
    return (
        <Container className="py-4">
            <h1 className="header_title">Expense Tracker</h1>
        </Container>
    );
}

export default Header;