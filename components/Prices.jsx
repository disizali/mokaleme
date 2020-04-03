import React from "react";
import { Row, Col } from "reactstrap";

export default function Prices() {
  return (
    <Row className="prices-list w-100 m-0 text-warning text-center">
      <Col sm={12} md={4}>
        <i className="fal fa-globe" />
        <div>
          <h2>دوره های آنلاین</h2>
          <p>مشاهده بیشتر</p>
        </div>
      </Col>
      <Col sm={12} md={4}>
        <i className="fal fa-dollar-sign" />
        <div>
          <h2>تعرفه خدمات</h2>
          <p>مشاهده بیشتر</p>
        </div>
      </Col>
      <Col sm={12} md={4}>
        <i className="fal fa-chalkboard-teacher" />
        <div>
          <h2>اساتید</h2>
          <p>مشاهده بیشتر</p>
        </div>
      </Col>
    </Row>
  );
}
