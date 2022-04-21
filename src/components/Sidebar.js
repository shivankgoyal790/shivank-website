import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainnav from "../Shared/Mainnav";
const Sidebar = (props) => {
  return (
    <div
      className="position-fixed animateme"
      onClick={props.onClick}
      style={{ zIndex: "100", right: "0px", display: props.show }}
    >
      <Mainnav />
    </div>
  );
};

export default Sidebar;
