import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import {
  faBriefcase,
  faFileAlt,
  faHome,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navlinks = () => {
  return (
    <ul className="nav flex-column px-3">
      <li className="nav-item setborder w-100  p-1 active">
        <a className="nav-link active text-white hoverme" href="#home">
          <FontAwesomeIcon icon={faHome} />
          &nbsp; Home
        </a>
      </li>
      <li className="nav-item setborder w-100  p-1">
        <a className="nav-link text-white hoverme" href="#aboutme">
          <FontAwesomeIcon icon={faUserAlt} />
          &nbsp; About
        </a>
      </li>
      <li className="nav-item setborder w-100 hoverme  p-1">
        <a className="nav-link text-white hoverme" href="#resume">
          <FontAwesomeIcon icon={faFileAlt} />
          &nbsp; Resume
        </a>
      </li>
      <li className="nav-item setborder w-100  p-1">
        <a className="nav-link text-white hoverme" href="#portfolio">
          <FontAwesomeIcon icon={faBriefcase} />
          &nbsp; Portfolio
        </a>
      </li>
      <li className="nav-item setborder w-100  p-1">
        <a className="nav-link text-white hoverme" href="#contact">
          <FontAwesomeIcon icon={faPaperPlane} />
          &nbsp; Contact
        </a>
      </li>
    </ul>
  );
};

export default Navlinks;
