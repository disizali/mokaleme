import React, { Component } from "react";
import Layout from "../../components/Layout";
import * as api from "../../src/api";

export class index extends Component {
  static async getInitialProps(context) {
    const post = await api.getPost(context.query.title);
    const settings = await api.getSettings();
    return { post, settings };
  }

  render() {
    const { post, settings } = this.props;
    return (
      <Layout settings={settings}>
        <div className="p-1 m-1 p-md-5 m-md-5 rtl text-right">
          <img src={post.cover} className="w-50 rounded" alt={post.title} />
          <hr />
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </Layout>
    );
  }
}

export default index;
