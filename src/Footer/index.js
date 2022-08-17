import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './index.css';

class FooterPage extends React.Component {
    render() {
        return (
            <Footer id="footer" color="special-color-dark" className="font-small pt-1">
                <Container className="text-left pb-3">
                    <Row>
                        <Col sm="6">
                            <h5 className="title">Informações de Contato</h5>
                           <ul>
                            <li className="list-unstyled"><FontAwesomeIcon icon="map-marker"/>&nbsp;&nbsp;R. Joaquim Meier, 854 - Lins de Vasconcelos. Rio de Janeiro - RJ</li>
                            <li className="list-unstyled"><FontAwesomeIcon icon="phone"/>&nbsp;&nbsp;(21) 3899-9938&nbsp; | &nbsp;(21) 2597-5999</li>
                            <li className="list-unstyled"><i class="fa fa-whatsapp"></i>&nbsp;&nbsp;(21) 993960900</li>
                            <li className="list-unstyled"><FontAwesomeIcon icon="envelope"/>&nbsp;&nbsp;largeriatricocoracaodemaria@yahoo.com.br</li>
                            <li className="list-unstyled"><FontAwesomeIcon icon="clock"/>&nbsp;&nbsp;8:00 às 17:00 Horas</li>
                            </ul>
                        </Col>
                        <Col sm="6">
                            <h5 className="title">Profissionais Disponíveis</h5>
                            <ul>
                                <li className="list-unstyled">Médico&nbsp; | &nbsp;Enfermagem&nbsp; | &nbsp;Psicólogo&nbsp; | &nbsp;Assistente Social&nbsp; | &nbsp;Recreação&nbsp; | &nbsp;Ludoterapia&nbsp;</li>
                            </ul>
                            <h5 className="title">Serviços Disponíveis</h5>
                            <ul>
                                <li className="list-unstyled">Quartos&nbsp; | &nbsp;Enfermarias&nbsp; | &nbsp;Suites&nbsp; | &nbsp;Mensal&nbsp; | &nbsp;Diárias&nbsp; | &nbsp;Fins de Semana</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; 2018 Copyright: <a href="https://geriatriacoracaodemaria.com.br"> www.geriatriacoracaodemaria.com.br </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;

