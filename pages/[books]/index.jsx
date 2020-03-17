import React, { Component } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import * as api from "../../src/api";
import { Row, Col } from "reactstrap";

export class books extends Component {
  static async getInitialProps(context) {
    const settings = await api.getSettings();
    const { Books: books } = await api.getBooks(encodeURI(context.query.books));
    return { books, settings };
  }
  render() {
    const { books, settings } = this.props;
    console.log(books);
    return (
      <Layout settings={settings}>
        <Row className="books-list m-0 p-5">
          {books.map((item, index) => {
            return (
              <Col key={index} sm={13} md={3}>
                <Link href={`/book/${item.name}`}>
                  <a>
                    <img src={item.image} />
                    <h2 className="text-dark">{item.name}</h2>
                    <p className="text-secondary">{item.description}</p>
                  </a>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Layout>
    );
  }
}

export default books;
