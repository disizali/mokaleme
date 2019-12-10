import React, { Component } from "react";
import { Container, Card } from "reactstrap";

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
            <ul className="d-flex">
              {courses.map(course => {
                return (
                  <li className="mx-2">
                    <img src={course.cover} alt={course.title} />
                    <div>
                      <h3>{course.title}</h3>
                      <p>{course.body}</p>
                    </div>
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
