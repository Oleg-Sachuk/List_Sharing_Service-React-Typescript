import React from 'react';
import { Nav } from 'react-bootstrap';

const Navbar: React.FC = () => {
    return (
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/">Create ToDo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/">List</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/about">About</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar;