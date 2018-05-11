import React from 'react'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Container, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'mdbreact'
import { BrowserRouter as Router } from 'react-router-dom'
import imgLogo from './img/Logo branco - transp teste 100.png'
import './index.css'

class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Router>
                <Navbar dark color="orange lighten-2" expand="md" fixed='top'>
                    <Container className="container-navbar">
                        <NavbarBrand className="navbar-brand" href="/"><img src={imgLogo} /> Lar Geriátrico Coração de Mária</NavbarBrand>
                        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                        <Collapse isOpen={this.state.collapse} navbar>
                            <NavbarNav className="navbar-nav" right>
                                <NavItem>
                                    <NavLink to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#">Serviços</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#">Contato</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#">Localização</NavLink>
                                </NavItem>
                                <NavItem>
                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                        <DropdownToggle nav caret>Informações</DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem href="#">Sobre</DropdownItem>
                                            <DropdownItem href="#">Depoimentos</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </NavItem>
                            </NavbarNav>
                        </Collapse>
                    </Container>
                </Navbar>
            </Router>
        );
    }
}

export default NavbarFeatures;