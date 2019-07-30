import React from 'react'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, Container/* , Dropdown, DropdownMenu, DropdownToggle, DropdownItem */ } from 'mdbreact'
import imgLogo from './img/Logo branco - transp teste 100.png'
import './index.css'
import '../hover.css'
import { NavHashLink as NavLink } from 'react-router-hash-link';


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
            <Navbar dark color="orange lighten-2" expand="md" fixed='top' scrolling>
                <Container className="container-navbar">
                    <NavbarBrand className="navbar-brand" href="/"><img src={imgLogo} alt="logo" /> Lar Geriátrico Coração de Mária</NavbarBrand>
                    {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                    <Collapse isOpen={this.state.collapse} navbar>
                        <NavbarNav className="navbar-nav" right>
                            <NavItem>
                                <NavLink smooth to="#header" className="nav-link hvr-underline-from-center">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink smooth to="#galeria" className="nav-link hvr-underline-from-center">Serviços</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink smooth to="#contato" className="nav-link hvr-underline-from-center">Contato</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink smooth to="#googlemaps" className="nav-link hvr-underline-from-center">Localização</NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle nav caret className="hvr-underline-from-center">Informações</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem href="#">Sobre</DropdownItem>
                                        <DropdownItem href="#">Depoimentos</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </NavItem> */}
                        </NavbarNav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavbarFeatures;