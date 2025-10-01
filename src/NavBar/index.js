import React, { useState } from 'react';
import {
    MDBNavbar as Navbar,
    MDBNavbarBrand as NavbarBrand,
    MDBNavbarNav as NavbarNav,
    MDBNavbarToggler as NavbarToggler,
    MDBCollapse as Collapse,
    MDBNavbarItem as NavItem,
    MDBContainer as Container,
    MDBIcon as Icon
} from 'mdb-react-ui-kit';
import imgLogo from './img/Logo branco - transp teste 100.png'
import './index.css'
import '../hover.css'
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    const scrollTo = (el) => {
        //Descontando a altura da navbar para melhorar a posição final dos NavLinks
        let offset = 120;

        if (el.id === 'galeria') {
            offset = 90;
        }

        window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
    };

    // Função para rolar para o topo ao clicar em um link de página
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Navbar
            expand="lg"
            className="navbar-custom"
            fixed='top'>
            <Container className=" container-navbar">
                <NavbarBrand className="navbar-brand" href="/">
                    <img src={imgLogo} alt="logo" />
                    <span style={{ color: 'white' }}>Lar Geriátrico Coração de Mária</span>
                </NavbarBrand>
                <NavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={toggleCollapse}
                >
                    <Icon icon='bars' fas />
                </NavbarToggler>
                <Collapse show={isOpen} navbar>
                    <NavbarNav className="navbar-nav" right>
                        <NavItem>
                            <Link
                                to="/"
                                className="nav-link hvr-underline-from-center"
                                onClick={() => {
                                    setIsOpen(false);
                                    scrollToTop();
                                }}
                                style={{ color: 'white' }}
                            >
                                Home
                            </Link>
                        </NavItem>
                        <NavItem>
                            <a
                                href="/"
                                className="nav-link hvr-underline-from-center"
                                onClick={e => {
                                    e.preventDefault();
                                    navigate('/');
                                    setTimeout(() => {
                                        const el = document.getElementById('galeria');
                                        if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: 'smooth' });
                                    }, 100);
                                    setIsOpen(false);
                                }}
                                style={{ color: 'white' }}
                            >
                                Serviços
                            </a>
                        </NavItem>
                        <NavItem>
                            <a
                                href="/"
                                className="nav-link hvr-underline-from-center"
                                onClick={e => {
                                    e.preventDefault();
                                    navigate('/');
                                    setTimeout(() => {
                                        const el = document.getElementById('contato');
                                        if (el) window.scrollTo({ top: el.offsetTop - 120, behavior: 'smooth' });
                                    }, 100);
                                    setIsOpen(false);
                                }}
                                style={{ color: 'white' }}
                            >
                                Contato
                            </a>
                        </NavItem>
                        <NavItem>
                            <a
                                href="/"
                                className="nav-link hvr-underline-from-center"
                                onClick={e => {
                                    e.preventDefault();
                                    navigate('/');
                                    setTimeout(() => {
                                        const el = document.getElementById('googlemaps');
                                        if (el) window.scrollTo({ top: el.offsetTop - 120, behavior: 'smooth' });
                                    }, 100);
                                    setIsOpen(false);
                                }}
                                style={{ color: 'white' }}
                            >
                                Localização
                            </a>
                        </NavItem>
                        <NavItem>
                            <Link
                                to="/sobre"
                                className="nav-link hvr-underline-from-center"
                                onClick={() => {
                                    setIsOpen(false);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                style={{ color: 'white' }}
                            >
                                Sobre
                            </Link>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;