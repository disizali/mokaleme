import React from "react";
import { Row, Col } from "reactstrap";
export default function Reasons() {
  return (
    <div className="py-5 d-flex flex-column justify-content-center align-items-center w-100 reasons">
      <h2>چرا مکالمه آنلاین ؟</h2>
      <Row className="w-75 text-right">
        <Col>
          <img src="https://www.italki.com/static/media/illustrations-01.14a9dc27.svg" />
          <h3>آسودگی در انتخاب استاد</h3>
          <p>
            از بین بیش از 10 استاد ، به انتخاب خود با یک استاد کار خود را شروع کنید
          </p>
        </Col>
        <Col>
          <img src="https://www.italki.com/static/media/illustrations-02.e3592c22.svg" />
          <h3>پرداخت درس به درس</h3>
          <p>
            در مکالمه آنلاین شما به ازای هر درسی که میخونید مبلغ رو پرداخت میکنید
          </p>
        </Col>
        <Col>
          <img src="https://www.italki.com/static/media/illustrations-03.a64719fe.svg" />
          <h3>همه جا ، همه وقت</h3>
          <p>هروقت و هرجا که دوست داشتید میتونید درستون رو بخونید</p>
        </Col>
      </Row>
    </div>
  );
}
