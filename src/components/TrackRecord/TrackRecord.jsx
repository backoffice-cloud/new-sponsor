import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import TrackRecordForm from "../TrackRecordForm";

const TrackRecord = () => {
  const [choice, setChoice] = useState();
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <h1>Let's fill your Track Record...</h1>
        <h3>Please select the project type...</h3>
        <select
          onChange={(e) => {
            setChoice(e.target.value);
          }}
        >
          <option selected="true" disabled="disabled">
            Please select option...
          </option>
          <option value="multifamily">Multifamily</option>
          <option value="studenthousing">Student Housing</option>
          <option value="commercial">Commercial</option>
          <option value="office">Office</option>
          <option value="industrial">Industrial</option>
        </select>
        {choice ? <TrackRecordForm choice={choice} /> : null}
      </div>
    </div>
  );
};

export default TrackRecord;
