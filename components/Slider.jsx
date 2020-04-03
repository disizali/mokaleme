import React, { Component } from "react";
import Link from "next/link";

export class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { slides } = this.props;
    return (
      <section className="slider rtl">
        <img src={slides[0].image} alt={slides[0].title} width="100%" />
        <h1 className="d-flex justify-content-center align-items-end pb-0 pb-md-3">
          {slides[0].title}
        </h1>
        <p className="d-none d-md-flex justify-content-center align-items-start pt-0 pt-md-3">
          {slides[0].body}
        </p>
        <div className="slider-link d-flex justify-content-center align-items-center">
          <Link href={`${slides[0].url}`}>
            <a className="py-3 px-5 bg-second text-fourth rounded">ادامه مطلب</a>
          </Link>
        </div>
        <div className="slider-buttons justify-content-center align-items-center text-right text-light d-none d-md-flex">
          <div className="h-100 w-25 d-flex justify-content-around align-items-center p-2">
            <div className="d-flex flex-column">
              <h2>اساتید مجرب</h2>
              <p>متن توضیحی در مورد اساتید مجرب</p>
            </div>
            <i className="fas fa-user text-second display-4" />
          </div>
          <div className="h-100 w-25 d-flex justify-content-around align-items-center text-right text-light p-2">
            <div className="d-flex flex-column">
              <h2>مقاله های متنوع</h2>
              <p>متن توضیحی در مورد مقاله های متنوع</p>
            </div>
            <i className="fas fa-home text-second display-4" />
          </div>
        </div>
      </section>
    );
  }
}

export default Slider;