import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

export class infoBar extends Component {
  render() {
    return (
      <div className="info-bar bg-fourth rtl">
        <Container className="p-0 h-100">
          <Row className="d-flex justify-content-between align-items-center m-0 p-0 h-100">
            <Col className="text-right m-0 p-0 h-100 align-items-center d-flex">
              <div className="d-flex">
                <div className="d-flex border-left pl-2">
                  <i className="fas fa-phone text-second ml-2 d-flex align-items-center justify-content-center" />
                  <span className="mx-2 text-fifth">۰۲۱-۹۹۹۹۹۹۹</span>
                </div>
                <div className="d-flex pl-2">
                  <i className="fas fa-envelope text-second mx-2 d-flex align-items-center justify-content-center" />
                  <span className="mr-2 text-fifth">test@gmail.com</span>
                </div>
              </div>
            </Col>
            <Col className="p-0 m-0 p-0  h-100 text-left justify-content-end align-items-center d-flex">
              <button className="btn-second h-100 button-warning px-3">
                تعیین سطع
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default infoBar;
