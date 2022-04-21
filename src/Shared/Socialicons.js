import {
  faFacebookF,
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Socialicons = () => {
  return (
    <div className="container-fluid d-flex justify-content-evenly align-items-center">
      <div className="rounded-circle social d-flex justify-content-center align-items-center p-2 m-0">
        <a className="text-white" href="https://twitter.com/GoyalShivank790">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
      <div className="rounded-circle social d-flex justify-content-center align-items-center p-2 m-0">
        <a
          className="text-white"
          href="https://www.facebook.com/shivank.goyal.7"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </div>
      <div className="rounded-circle social d-flex justify-content-center align-items-center p-2 m-0">
        <a
          className="text-white"
          href="https://www.instagram.com/shivank.goyal.790/?hl=en"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div
        onClick={() =>
          window.open(
            "mailto:email@example.com?subject=Subject&body=Body%20goes%20here"
          )
        }
        className="rounded-circle social d-flex justify-content-center align-items-center p-2 m-0"
      >
        <FontAwesomeIcon icon={faGoogle} />
      </div>
      <div className="rounded-circle social d-flex justify-content-center align-items-center p-2 m-0">
        <a
          className="text-white"
          href="https://www.linkedin.com/in/shivank-goyal-619415214/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};
export default Socialicons;
