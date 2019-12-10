import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container
} from "reactstrap";
import InfoBar from "./infoBar";
import Link from "next/link";

export default class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    const {isOpen} = this.state;
    return (
      <div>
        <InfoBar />
        <Navbar expand="md" className="rtl bg-fifth text-fourth">
          <Container>
            <Link href="/">
              <NavbarBrand href="/">
                <img
                  src={require("../public/images/logo.png")}
                  alt="mokaleme online"
                  className="ml-2"
                />
                <h1 className="ml-2">مکالمه آنلاین</h1>
              </NavbarBrand>
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link href="#">
                    <NavLink href="#">صفحه اصلی</NavLink>
                  </Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    منو
                  </DropdownToggle>
                  <DropdownMenu right className="bg-fourth text-second">
                    <DropdownItem className="text-right">
                      زیر منو شماره ۱
                    </DropdownItem>
                    <DropdownItem className="text-right">
                      زیر منو شماره ۲
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem className="text-right">
                      زیر منو شماره ۳
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}