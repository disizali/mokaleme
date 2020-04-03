import React, { Component } from "react";
import { Container, Card } from "reactstrap";
import Link from "next/link";
export class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { courses } = this.props;
    return (
      <section className="py-5 courses rtl text-right bg-fifth">
        <Container>
          <h2 className="mb-5 text-fourth">دوره ها</h2>
          <div className="mt-5">
            <ul className="d-flex flex-column flex-md-row">
              {courses.map((course, index) => {
                return (
                  <li className="mx-0 mx-md-2 my-2 my-md-0" key={index}>
                    <Link href={`/${encodeURI(course.title)}`}>
                      <a href={`/${encodeURI(course.title)}`}>
                        <div className="cover">
                          <img src={course.cover} alt={course.title} />
                        </div>
                        <div>
                          <h3>{course.title}</h3>
                          <p>{course.body}</p>
                        </div>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </section>
    );
  }
}

export default Courses;
