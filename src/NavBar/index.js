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
import { NavHashLink as NavLink } from 'react-router-hash-link';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

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
                            <NavLink
                                smooth
                                to="#header"
                                scroll={el => scrollTo(el)}
                                onClick={() => setIsOpen(false)}
                                className="nav-link hvr-underline-from-center"
                                style={{ color: 'white' }}
                            >
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink smooth to="#galeria" scroll={el => scrollTo(el)} onClick={() => setIsOpen(false)} className="nav-link hvr-underline-from-center">Serviços</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink smooth to="#contato" scroll={el => scrollTo(el)} onClick={() => setIsOpen(false)} className="nav-link hvr-underline-from-center">Contato</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink smooth to="#googlemaps" scroll={el => scrollTo(el)} onClick={() => setIsOpen(false)} className="nav-link hvr-underline-from-center">Localização</NavLink>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;