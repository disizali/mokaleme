import React, { Component } from "react";
import Layout from "../../components/Layout";

import * as api from "../../src/api";

export default class book extends Component {
  static async getInitialProps(context) {
    const book = await api.getBook(context.query.book);
    const settings = await api.getSettings();
    return { book, settings };
  }
  constructor(props) {
    super(props);
    this.state = { tab: 0 };
    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(tab) {
    if (tab === this.state.tab) return this.setState({ tab: 0 });
    this.setState({ tab });
  }

  render() {
    const { book, settings } = this.props;
    const { Contents: contents } = book;
    const { tab } = this.state;
    return (
      <Layout settings={settings}>
        <h1>{book.name}</h1>
        <ul className="content-list">
          {contents.map((item, index) => {
            return (
              <div key={index} onClick={() => this.selectTab(item.id)}>
                <h2>{item.title}</h2>
                <div
                  className={`content-body ${
                    tab === item.id ? "opened" : "collapsed"
                  }`}
                >
                  <div dangerouslySetInnerHTML={{ __html: item.body }} />
                </div>
              </div>
            );
          })}
        </ul>
      </Layout>
    );
  }
}
