import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Heading from "../../Shared/Heading";
import "./About.css";
const About = () => {
  return (
    <div id="aboutme" className="d-flex flex-column w-100 gap-5">
      <div className="heading-back">
        <Heading text="About Me" />
      </div>
      <div className="row w-100">
        <p
          className="text-center text-secondary col-md-8 col-12 m-auto"
          style={{ fontSize: "18px", fontWeight: "500" }}
        >
          Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his
          nemore temporibus consequuntur, vim ad prima vivendum consetetur.
          Viderer feugiat at pro, mea aperiam
        </p>
      </div>
      <div className="w-100 d-flex flex-column justify-content-center align-items-center gap-3">
        <h4 className="im">Web Developer & UI/UX Designer</h4>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="d-flex container align-items-lg-center align-items-start justify-content-evenly p-4 flex-lg-row flex-column">
          <div>
            <ul className="aboutlist">
              <li className="about-list">
                <span>
                  <FontAwesomeIcon className="text-info" icon={faCaretRight} />
                  &nbsp; Birthday:
                </span>{" "}
                &nbsp;1 April 2000
              </li>
              <li className="about-list">
                <span>
                  <FontAwesomeIcon className="text-info" icon={faCaretRight} />
                  &nbsp; Website:
                </span>
                &nbsp; www.ShivankGoyal.com
              </li>
              <li className="about-list">
                <span>
                  <FontAwesomeIcon className="text-info" icon={faCaretRight} />
                  &nbsp; Phone:
                </span>
                &nbsp; +7906558590
              </li>
              <li className="about-list">
                <span>
                  <FontAwesomeIcon className="text-info" icon={faCaretRight} />
                  &nbsp; City:
                </span>{" "}
                &nbsp;Agra, Uttar pradesh
              </li>
            </ul>
          </div>
          <div>
            <ul className="aboutlist">
              <li className="about-list">
                <span>
                  <FontAwesomeIcon className="text-info" icon={faCaretRight} />
                  &nbsp; Age:
                </span>{" "}
                &nbsp;22
              </li>
              <li className="about-list">
                <span>
                  <FontAwesomeIcon className="text-info" icon={faCaretRight} />
                  &nbsp; Degree:
                </span>
                &nbsp; B.tech In Computer Science
              </li>
              <li className="about-list">
                <span>
                  <FontAwesomeIcon className="text-info" icon={faCaretRight} />
                  &nbsp; Email:
                </span>
                &nbsp; goyal.shivank790@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="row w-100">
          <p
            className="text-center text-secondary col-md-10 col-12 m-auto"
            style={{ fontSize: "18px", fontWeight: "500" }}
          >
            Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In
            his nemore temporibus consequuntur, vim ad prima vivendum
            consetetur. Viderer feugiat at pro, mea aperiam
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
