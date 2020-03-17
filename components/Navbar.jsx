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
    const { isOpen } = this.state;
    return (
      <div>
        <InfoBar />
        <Navbar expand="md" className="rtl bg-fifth text-fourth">
          <Container>
            <NavbarBrand href="/">
              <img
                src={require("../public/images/logo.png")}
                alt="mokaleme online"
                className="ml-2"
              />
              <h1 className="ml-2">مکالمه آنلاین</h1>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link href="/">
                    <NavLink href="/">صفحه اصلی</NavLink>
                  </Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    منو
                  </DropdownToggle>
                  <DropdownMenu right className="bg-fourth text-second">
                  <Link href={`/blog`}>
                      <a className="bg-transparent">
                        <DropdownItem className="text-right">
                        وبلاگ
                        </DropdownItem>
                      </a>
                    </Link>
                    <DropdownItem divider />
                    <Link href={`/کودکان`}>
                      <a>
                        <DropdownItem className="text-right">
                          کودکان
                        </DropdownItem>
                      </a>
                    </Link>
                    <Link href={`/نوجوانان`}>
                      <a>
                        <DropdownItem className="text-right">
                          نوجوانان
                        </DropdownItem>
                      </a>
                    </Link>
                    <Link href={`/بزرگسالان`}>
                      <a>
                        <DropdownItem className="text-right">
                          بزرگسالان
                        </DropdownItem>
                      </a>
                    </Link>
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
