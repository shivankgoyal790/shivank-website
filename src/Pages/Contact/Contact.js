import React from "react";
import Heading from "../../Shared/Heading";
import Forms from "./Forms";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import image from "../../images/ben-kolde-bs2Ba7t69mM-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div
      id="contact"
      className="d-flex flex-column gap-5 justify-content-center align-items-center py-5 mt-4 w-100"
    >
      <div className="heading-back w-100">
        <Heading text="Get In Touch" />
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
      <div className="d-flex flex-lg-row flex-column justify-content-between w-100 gap-5 px-sm-5 px-1">
        <div className="w-lg-50 w-100 d-flex flex-column align-items-center">
          <div className="p-5 shadow-lg d-flex flex-column gap-3 w-100">
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp; Email: goyal.shivank790@gmail.com
            </p>

            <p>
              <FontAwesomeIcon icon={faPhoneAlt} />
              &nbsp; Mobile: 7906558590
            </p>  
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              &nbsp; Agra , Uttar pradesh
            </p>
          </div>
          <div
            className="w-sm-75 w-100 mt-5 shadow-lg"
            style={{ height: "300px" }}
          >
            <img
              src={image}
              alt="pic"
              className="w-100 h-100 shadow-lg"
              style={{ objectFit: "cover", objectPosition: "50% 85%" }}
            />
          </div>
        </div>
        <div className="w-lg-50 w-sm-75 w-100 shadow-lg m-lg-0 m-auto">
          <Forms />
        </div>
      </div>
    </div>
  );
};
export default Contact;
