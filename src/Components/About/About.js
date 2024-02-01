import React from "react";

import "./About.css";

export default function About() {
  return (
    <div className="about text-center text-light">
      <h2 className="pt-5">ABOUT COMPONENT</h2>
      <div className="d-flex justify-content-center align-items-center">
        <div className="hr"></div>
        <i className="fa-solid fa-star m-3"></i>
        <div className="hr"></div>
      </div>
      <div className="row parag">
        <div className="col-md-6 col-sm-12">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
        <div className="col-md-6 col-sm-12">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}
