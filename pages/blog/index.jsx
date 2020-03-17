import React, { Component } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

import * as api from "../../src/api";
import { Row, Col } from "reactstrap";

export class index extends Component {
  static async getInitialProps(context) {
    const blog = await api.getBlog();
    const settings = await api.getSettings();
    return { blog, settings };
  }

  render() {
    const { blog, settings } = this.props;
    return (
      <Layout settings={settings}>
        <ul className="blog-list">
          {blog.map((item, index) => {
            return (
              <Link href={`/blog/${item.title}`} key={index}>
                <a>
                  <Row className="rtl text-right blog-post">
                    <Col sm={2}>
                      <img
                        src={item.cover}
                        alt={item.title}
                        className="w-100"
                      />
                    </Col>
                    <Col className="d-flex flex-column justify-content-center">
                      <h2>{item.title}</h2>
                      <p className="text-secondary">{item.body}</p>
                    </Col>
                  </Row>
                </a>
              </Link>
            );
          })}
        </ul>
      </Layout>
    );
  }
}

export default index;
