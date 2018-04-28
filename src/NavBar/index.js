import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarFeatures extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: true
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
                <Navbar dark color="warning-color" expand="md" fixed='top'>
                    <NavbarBrand href="/">Geriatria Coração de Mária</NavbarBrand>
                    {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
                    <Collapse isOpen={this.state.collapse} navbar>
                        <NavbarNav right>
                            <NavItem>
                                <NavLink to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#">Contato</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="#">Sobre</NavLink>
                            </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default NavbarFeatures;