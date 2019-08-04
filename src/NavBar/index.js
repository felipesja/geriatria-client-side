import React from 'react'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, Container } from 'mdbreact'
import imgLogo from './img/Logo branco - transp teste 100.png'
import './index.css'
import '../hover.css'
import { NavHashLink as NavLink } from 'react-router-hash-link';


class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false
        };
        this.onClick = this.onClick.bind(this);
        this.onClickLink = this.onClickLink.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    onClickLink() {
        this.setState({
            collapse: false
        });
    }

    scrollTo(el) {        
        //Descontando a altura da navbar para melhorar a posição final dos NavLinks
        let offset = 120;

        if (el.id === 'galeria') {
            offset = 90;
        }

        window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
    }

    render() {
        return (
            <Navbar dark color="orange lighten-2" expand="md" fixed='top'>
                <Container className="container-navbar">
                    <NavbarBrand className="navbar-brand" href="/"><img src={imgLogo} alt="logo" /> Lar Geriátrico Coração de Mária</NavbarBrand>
                    {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                    <Collapse isOpen={this.state.collapse} navbar>
                        <NavbarNav className="navbar-nav" right>
                            <NavItem>
                                <NavLink smooth to="#header" scroll={el => this.scrollTo(el)} onClick={this.onClickLink} className="nav-link hvr-underline-from-center">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink smooth to="#galeria" scroll={el => this.scrollTo(el)} onClick={this.onClickLink} className="nav-link hvr-underline-from-center">Serviços</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink smooth to="#contato" scroll={el => this.scrollTo(el)} onClick={this.onClickLink} className="nav-link hvr-underline-from-center">Contato</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink smooth to="#googlemaps" scroll={el => this.scrollTo(el)} onClick={this.onClickLink} className="nav-link hvr-underline-from-center">Localização</NavLink>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavbarFeatures;