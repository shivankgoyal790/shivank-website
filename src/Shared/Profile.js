import React from "react";
import Socialicons from "./Socialicons";
import logo from "../images/download.png";

const Profile = () => {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center text-white p-4 gap-3 w-100">
      <div
        className="rounded-circle d-flex justify-content-center align-items-center"
        style={{
          width: "110px",
          height: "110px",
          backgroundColor: "rgba(255,255,255,0.2)",
        }}
      >
        <img
          className="rounded-circle"
          src={logo}
          alt="shivank"
          style={{ width: "90%", height: "90%" }}
        />
      </div>
      <h4>Shivank Goyal</h4>
      <Socialicons />
    </div>
  );
};
export default Profile;
