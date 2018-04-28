import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './index.css';

class FooterPage extends React.Component {
    render() {
        return (
            <Footer id="footer" color="special-color-dark" className="font-small pt-4">
                <Container className="text-left">
                    <Row>
                        <Col sm="6">
                            <h5 className="title">Informações de Contato</h5>
                           <ul>
                            <li className="list-unstyled"><FontAwesomeIcon icon="map"/>R. Joaquim Meier, 854 - Lins de Vasconcelos. Rio de Janeiro - RJ</li>
                    
                            <li className="list-unstyled"><FontAwesomeIcon icon="phone"/>(21) 2597-5999</li>
                            <li className="list-unstyled"><FontAwesomeIcon icon="envelope"/>contato@geriatriacoracaodemaria</li>
                            </ul>
                        </Col>
                        {/* <Col sm="6">
                            <h5 className="title">Links</h5>
                            <ul>
                                <li className="list-unstyled"><a href="#!">Link 1</a></li>
                                <li className="list-unstyled"><a href="#!">Link 2</a></li>
                                <li className="list-unstyled"><a href="#!">Link 3</a></li>
                                <li className="list-unstyled"><a href="#!">Link 4</a></li>
                            </ul>
                        </Col> */}
                    </Row>
                </Container>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://geriatriacoracaodemaria.com.br"> www.geriatriacoracaodemaria.com.br </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;

