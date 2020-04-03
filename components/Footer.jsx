import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import Link from "next/link";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <Row className="rtl text-right p-3 align-items-center">
          <Col sm={12} md={3}>
            <h3>مکالمه آنلاین</h3>
            <p className="text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
          </Col>
          <Col sm={12} md={3}>
            <h3>منوی وب سایت</h3>
            <ul>
              <li>
                <Link href="/blog">
                  <a>
                    <span>وبلاگ</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/کودکان">
                  <a>
                    <span>کودکان</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/نوجوانان">
                  <a>
                    <span>نوجوانان</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/بزرگسالان">
                  <a>
                    <span>بزرگسالان</span>
                  </a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={3}>
            <h3>تماس با ما</h3>
            <ul>
              <li>شماره تماس :99999-021</li>
              <li>ایمیل : test@gmail.com</li>
              <li>آدرس : محل دقیق شرکت</li>
            </ul>
          </Col>
          <Col sm={12} md={3}>
            <img
              src={`/images/enamad-logo.png`}
              alt="enamad logo"
              className="w-50"
            />
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
