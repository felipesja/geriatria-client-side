import React from 'react';
import { MDBFooter as Footer, MDBContainer as Container, MDBRow as Row, MDBCol as Col } from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';

class FooterPage extends React.Component {
    render() {
        return (
            <Footer className="footer-custom">
                <Container className="custom-container">
                    <Row>
                        <Col sm="6">
                            <h5 className="title">Informações de Contato</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <i className="fas fa-map-marker-alt"></i>
                                    R. Joaquim Meier, 854 - Lins de Vasconcelos. Rio de Janeiro - RJ
                                </li>
                                <li className="list-unstyled">
                                    <i className="fas fa-phone"></i>
                                    (21) 3899-9938 | (21) 2597-5999
                                </li>
                                <li className="list-unstyled">
                                    <i className="fab fa-whatsapp"></i>
                                    (21) 993960900
                                </li>
                                <li className="list-unstyled">
                                    <i className="fas fa-envelope"></i>
                                    largeriatricocoracaodemaria@yahoo.com.br
                                </li>
                                <li className="list-unstyled">
                                    <i className="fas fa-clock"></i>
                                    8:00 às 17:00 Horas
                                </li>
                            </ul>
                        </Col>
                        <Col sm="6">
                            <h5 className="title">Profissionais Disponíveis</h5>
                            <ul>
                                <li className="list-unstyled">
                                    Médico | Enfermagem | Psicólogo | Assistente Social | Recreação | Ludoterapia
                                </li>
                            </ul>
                            <h5 className="title">Serviços Disponíveis</h5>
                            <ul>
                                <li className="list-unstyled">
                                    Quartos | Enfermarias | Suites | Mensal | Diárias | Fins de Semana
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright:{' '}
                        <a href="https://geriatriacoracaodemaria.com.br">
                            www.geriatriacoracaodemaria.com.br
                        </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;

