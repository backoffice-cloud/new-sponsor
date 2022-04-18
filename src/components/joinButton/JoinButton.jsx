import React from "react";
import { Link } from "react-router-dom";
import "./joinButton.scss";

const JoinButton = () => {
  return (
    <div className="btn-container">
      <Link to="/new-sponsor">
        <div className="join">
          <h2>Join Us!</h2>
          <h4>+</h4>
        </div>
      </Link>
    </div>
  );
};

export default JoinButton;
