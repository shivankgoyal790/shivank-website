import React from "react";
import Heading from "../../Shared/Heading";
import "./Resume.css";

const Resume = () => {
  return (
    <div
      id="resume"
      className="d-flex flex-column gap-5 justify-content-center align-items-center py-5 mt-4 w-100"
    >
      <div className="heading-back w-100">
        <Heading text="Resume" />
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
      <div className="w-100 d-flex flex-md-row flex-column justify-content-between">
        <div className="w-md-50 w-100 d-flex flex-column px-5">
          <h4 className="bgcol">Summary</h4>
          <div className="borderleft">
            <h3 className="position-relative">
              Shivank Goyal
              <div className="circle"></div>
            </h3>
            <p>
              Innovative and deadline-driven Web Developer & Designer with 2+
              years of experience designing and developing.Have handled many
              projects all listed in the portfolio
            </p>
            <ul>
              <li>+7906558590</li>
              <li>goyal.shivank790@gmail.com</li>
              <li>www.ShivankGoyal.com</li>
              <li>Agra , Uttar pradesh</li>
            </ul>
          </div>
          <h4 className="bgcol">Education</h4>
          <div className="borderleft">
            <h4 className="position-relative">
              Bachelor of Technology (B.Tech), Computer Science & Engineering
              <div className="circle"></div>
            </h4>
            <p>JAYPEE INSTITUTE OF INFORMATION TECHNOLOGY</p>
            <button className="btn mb-3" style={{ backgroundColor: "#e4edf9" }}>
              2019 -2023
            </button>
          </div>
          <div className="borderleft">
            <h4 className="position-relative">
              Senior Secondary (XII), Science
              <div className="circle"></div>
            </h4>
            <p>St. Clare's Senior Secondary School (CBSE board)</p>
            <p>
              Year of completion:{" "}
              <button className="btn" style={{ backgroundColor: "#e4edf9" }}>
                2018
              </button>
            </p>
            <p>Percentage: 91.20%</p>
          </div>
          <div className="borderleft">
            <h4 className="position-relative">
              Secondary (X)
              <div className="circle"></div>
            </h4>

            <p>St. Clare's Senior Secondary School (CBSE board)</p>
            <p>
              Year of completion:{" "}
              <button className="btn" style={{ backgroundColor: "#e4edf9" }}>
                2016
              </button>
            </p>
            <p>CGPA: 9.20/10</p>
          </div>
          <h4 className="bgcol">Trainings</h4>
          <div className="borderleft">
            <h5 className="position-relative">
              MERN STACK FULL GUIDE
              <div className="circle"></div>
            </h5>
            <p>udemy, Online</p>
            <p>
              Learned MERN in depth .Had a solid understanding of what MERN
              stack is and how it works.
            </p>
          </div>
        </div>

        <div className="w-md-50 w-100 d-flex flex-column px-5">
          <h4 className="bgcol">Professional experience</h4>
          <div className="borderleft">
            <h4 className="position-relative">
              Wesbite & SDE Intern at Ignis Tech Solutions
              <div className="circle"></div>
            </h4>
            <button className="btn mb-3" style={{ backgroundColor: "#e4edf9" }}>
              3 months
            </button>

            <p>Work on the front-end design using ReactJS</p>
            <p>
              Creating the official website for the company along with many more
              Websites & finding Designs for the same.
            </p>
            <p>Maintain regular coordination with the mentors</p>
            <p>
              Handling and creating new API's, fetching data for the fromend
              using Node.js
            </p>
          </div>
          <div className="borderleft">
            <h4 className="position-relative">
              Freelancing
              <div className="circle"></div>
            </h4>
            <button className="btn mb-3" style={{ backgroundColor: "#e4edf9" }}>
              2021-Present
            </button>
            <p>Designed and worked on a number of projects for clients</p>
            <p>Created Website For a Travel Agency based in France</p>
            <p>
              Recommended and consulted with clients on the most appropriate
              graphic design
            </p>
          </div>
          <h3 className="bgcol">Skills</h3>
          <div className="borderleft">
            <h3 className="position-relative">
              <div className="circle"></div>
            </h3>
            <p>Data Structures & Algorithms</p>
            <div className="d-flex flex-wrap gap-3">
              <p>C++</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>JAVASCRIPT</p>
              <p>REACT.JS</p>
              <p>NODE.JS</p>
              <p>MONGODB</p>
              <p>EXPRESS.JS</p>
              <p>MYSQL</p>
            </div>
            <p>
              Experience with many frameworks and technologies, such as
              Postman,Firebase,Bootstrap,Git and Github
            </p>
          </div>
          <h4 className="bgcol">Positions Of Responsiblity</h4>
          <div className="borderleft">
            <h3 className="position-relative">
              <div className="circle"></div>
            </h3>
            <p>Volunteered at CICE JIIT Noida 2020-2021</p>
            <p>Event Organizer in SCI-COMM FEST 2017-2018</p>
            <p>Sports Captain at School 2017-2018</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
