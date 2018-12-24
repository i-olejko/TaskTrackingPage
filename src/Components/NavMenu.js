import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

class NavMenu extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isOpen: false
        };
        this._onToggle = this._onToggle.bind(this);
    }
    _onToggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" dark >
                    <Container>
                        <NavbarBrand tag={Link} to="/">Tickets</NavbarBrand>
                        <NavbarToggler onClick={this._onToggle} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="/about">About</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
export default NavMenu;