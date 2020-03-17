import React, { Component } from "react";
import Link from "next/link";

export default class Welcome extends Component {
  render() {
    return (
      <section className="welcome rtl d-flex">
        <img
          src={require("../public/images/welcome.jpg")}
          alt="welcome image"
        />
        <div className="d-flex flex-column justify-content-center align-items-start">
          <h1 className="text-main text-right w-100 my-3">
            به سایت ما خوش آمدید
          </h1>
          <p className="text-fourth text-justify w-75 my-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد.
          </p>
          <Link href="/blog/مقاله خوش آمد گویی">
            <a>
              <button className="button-warning my-3 py-3 px-5">
                ادامه مطلب
              </button>
            </a>
          </Link>
        </div>
      </section>
    );
  }
}
