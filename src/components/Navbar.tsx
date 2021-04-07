import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <Nav className="justify-content-center navstyle" activeKey="/home">
            <Nav.Item>
                <NavLink className="navfont" to="/">Create ToDo</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className="navfont" to="/share">Share</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className="navfont" to="/about">About</NavLink>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar;