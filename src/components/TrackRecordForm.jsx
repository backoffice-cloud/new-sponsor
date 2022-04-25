import React from "react";
import Multifamily from "./TrackRecord/Multifamily";

const TrackRecordForm = ({ choice }) => {
  const renderSwitch = (choice) => {
    switch (choice) {
      case "multifamily":
        return <Multifamily />;
      case "studenthousing":
        return;
      case "commercial":
        return;
      case "industrial":
        return;
      default:
        return "foo";
    }
  };
  return <div>{renderSwitch(choice)}</div>;
};

export default TrackRecordForm;
