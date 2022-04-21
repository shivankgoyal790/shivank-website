import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Backdrop = (props) => {
  return (
    <div
      className="w-100 opacity-50 bg-black position-absolute top-0"
      style={{ height: "1000px", display: props.show, zIndex: "98" }}
      onClick={props.onClick}
    ></div>
  );
};

export default Backdrop;
