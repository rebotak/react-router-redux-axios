import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../assets/img/logo.jpg';

class Header extends Component {
  constructor(props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const {} = this.props;
    return (
      <div className="header">
      <div className="stucker">&nbsp;</div>
        <Navbar color="faded" light>
          <div className="container">
            <NavbarBrand href="/" className="mr-auto">
            <img src={logo} alt=""/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="https://about.me/rebotak/" target="_blank">About Me</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/rebotak/" target="_blank">Github</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;