import React, { Component } from "react";
import Layout from "../components/Layout";
import * as api from "../src/api";
import Slider from "../components/Slider";
import Welcome from "../components/Welcome";
import Head from "next/head";
import Courses from "../components/Courses";

export class index extends Component {
  static async getInitialProps(context) {
    const slides = await api.getSlides();
    const settings = await api.getSettings();
    const teachers = await api.getTeachers();
    const courses = await api.getCourses();
    return { slides, settings, courses };
  }
  render() {
    const { slides, settings, courses, teachers } = this.props;
    return (
      <Layout settings={settings}>
        <Head>
          <title>{settings.title}</title>
        </Head>
        <Slider slides={slides} />
        <Welcome />
        <Courses courses={courses} />
      </Layout>
    );
  }
}

export default index;
