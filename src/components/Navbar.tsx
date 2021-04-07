import React from 'react';
import { Nav } from 'react-bootstrap';

const Navbar: React.FC = () => {
    return (
        <Nav className="justify-content-center navstyle" activeKey="/home">
            <Nav.Item>
                <Nav.Link className="navfont" href="/">Create ToDo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="navfont" eventKey="/">List</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="navfont" eventKey="/about">About</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar;