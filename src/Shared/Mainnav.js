import React from "react";
import Navlinks from "./Navlinks";
import Profile from "./Profile";

const Mainnav = () => {
  return (
    <div
      className="position-sticky d-flex flex-column gap-5 justify-content-evenly w-100"
      style={{
        left: "0px",
        top: "0px",
        height: "100vh",

        backgroundColor: "rgb(3, 9, 22)",
      }}
    >
      <Profile />
      <Navlinks />
      <p className="text-center text-white" style={{ fontSize: "14px" }}>
        © Designed & Maintained By <br /> Shivank Goyal
      </p>
    </div>
  );
};
export default Mainnav;
