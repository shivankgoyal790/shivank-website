import React, { useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../components/Sidebar";
import Backdrop from "../../components/Backdrop";

const Home = () => {
  const scrollme = () => {
    window.scrollBy(0, 720);
  };
  const [isdisplay, setdisplay] = useState("none");
  const sidedrawerhandler = () => {
    if (isdisplay === "none") setdisplay("block");
    else setdisplay("none");
  };
  return (
    <div id="home" className="w-100 position-relative home-container">
      <Backdrop show={isdisplay} onClick={sidedrawerhandler} />
      <Sidebar show={isdisplay} onClick={sidedrawerhandler} />
      <div className="d-flex justify-content-between px-md-5 px-3 align-items-center">
        <h3 className="mx-md-5 py-3 px-md-3 text-white heading ">
          I Can do a Lot of things
        </h3>
        <h2 className="d-lg-none d-block" onClick={sidedrawerhandler}>
          <span className="text-white d-sm-inline d-none">Menu</span>&nbsp;
          <FontAwesomeIcon icon={faBars} className="text-white" />
        </h2>
      </div>
      <div
        className="position-absolute text-white d-flex flex-column align-items-center"
        style={{ bottom: "40px", left: "45%" }}
      >
        <div className="scroll">Scroll</div>
        <span className="scroll-down">
          <FontAwesomeIcon
            style={{ cursor: "pointer" }}
            onClick={scrollme}
            icon={faChevronDown}
          />
        </span>
      </div>
      <div className="position-absolute" style={{ top: "38%", left: "15%" }}>
        <h1 className="text-white display-4">Shivank Goyal</h1>
      </div>
      <div
        className="text-white position-absolute"
        style={{ top: "46%", left: "15%" }}
      >
        <div className="wrapper">
          <div className="im">I'm a</div>
          <ul className="dynamic-text">
            <li className="typewriter">
              <span>Designer</span>
            </li>
            <li>
              <span>Developer</span>
            </li>
            <li>
              <span>Freelancer</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Home;
