import React from "react";
import Nav from "./Nav";
import '../css/InstructorHome.css';
import { Link } from "react-router-dom";

const InstructorHome = () => {
  return (
    <>
      <div class="ibody">
        <Nav></Nav>

        <div class="card sphead">
          <div class="card-body">
            <h2>Recently Uploaded</h2>
          </div>
        </div>

        <div class="card card-recent">
          <h5 class="card-header">Course | IIIT Sri City</h5>
          <div class="card-body profile-card-body">
            <h5>Fundamentals of Fullstack development</h5>
            <p>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="/course" class="btn btn-primary">
              view course
            </a>
          </div>
        </div>

        <div class="card showall">
          <div class="card-body">
            <a href="/api/user/<%=locals.id%>">
              <button type="button" class="btn">
                Show All...
              </button>
            </a>
          </div>
        </div>

        <div class="card upload">
          <div class="card-body">
            <Link to={'/educator/courseupload'}>
              <button type="button" class="btn btn-outline-primary btn-lg">
                Upload new course
              </button>
            </Link>

          </div>
        </div>

        <div class="card upload" style={{ marginTop: "-5px" }}>
          <div class="card-body">
            <Link to={'/educator/lessonupload'}>
              <button type="button" class="btn btn-outline-primary btn-lg">
                Upload new Lesson
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorHome;
