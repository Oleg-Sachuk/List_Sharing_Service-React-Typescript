import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer className="footer justify-content-center footStyle">
            <div className="container">
                <Row>
                    <Col sm={7}>
                        <span>Made on demonstrational purposes by Oleg Sachuk.</span>
                    </Col>
                    <Col sm={3}>
                        <ul className="links">
                            <li>find me on Facebook</li>
                            <li>find me on on Gthub</li>
                        </ul>
                    </Col>
                    <Col sm={2}>
                        <ul>
                            <a rel="noopener noreferrer" href="https://www.facebook.com/sachuk.oleg">
                                <li style={{ listStyleType: 'none' }}>
                                    <FontAwesomeIcon className="icons" icon={faFacebook} />
                                </li>
                            </a>
                            <a rel="noopener noreferrer" href="https://github.com/Oleg-Sachuk">
                                <li style={{ listStyleType: 'none' }}>
                                    <FontAwesomeIcon className="icons" icon={faGithub} />
                                </li>
                            </a>
                        </ul>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default Footer;