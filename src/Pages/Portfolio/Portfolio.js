import React from "react";
import ProjectList from "./ProjectList";
import image1 from "../../images/Screenshot (753).png";
import image2 from "../../images/Screenshot (752).png";
import image6 from "../../images/images_features12-a_0-1544804161468.jpg";
import image3 from "../../images/img1.png";
import image4 from "../../images/michael-soledad-NrR6ByFMBas-unsplash.jpg";
import image5 from "../../images/Screenshot (754).png";
import Heading from "../../shared/Heading";

const Projects = [
  {
    id: "1",
    image: image1,
    workname: "Share Places",
    webdesign: "Full Stack",
  },
  {
    id: "2",
    image: image2,
    workname: "Buy & Sell",
    webdesign: "Full Stack",
  },
  {
    id: "3",
    image: image3,
    workname: "Animeclub",
    webdesign: "Full Stack",
  },
  {
    id: "4",
    image: image4,
    workname: "Evanto website template",
    webdesign: "Web Design UI",
  },
  {
    id: "5",
    image: image5,
    workname: "Bussiness Website template",
    webdesign: "Web Design UI",
  },
  {
    id: "6",
    image: image6,
    workname: "Events",
    webdesign: "Full Stack",
  },
];

const Portfolio = () => {
  return (
    <>
      <div
        id="portfolio"
        className="d-flex flex-column gap-5 justify-content-center align-items-center py-5 mt-4 w-100"
      >
        <div className="heading-back w-100">
          <Heading text="My Projects" />
        </div>

        <div className="row w-100">
          <p
            className="text-center text-secondary col-md-8 col-12 m-auto"
            style={{ fontSize: "18px", fontWeight: "500" }}
          >
            Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In
            his nemore temporibus consequuntur, vim ad prima vivendum
            consetetur. Viderer feugiat at pro, mea aperiam
          </p>
        </div>
        <div className="d-flex container gap-5 flex-wrap justify-content-center align-items-center mt-5">
          <ProjectList items={Projects} />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
