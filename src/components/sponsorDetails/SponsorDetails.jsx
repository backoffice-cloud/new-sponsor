import React from "react";
import { connect } from "react-redux";
import { FIELD_CHANGE } from "../../redux/actions/newSponsor";
import { newSponsorform } from "../../Form/Form";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

export const SponsorDetails = ({ onChange }) => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div>
          <h1>Sponsor Details</h1>
          {newSponsorform.new_sponsor_details.map((field) => {
            return (
              <div key={field.name}>
                <label>{field.title}:</label>
                <br />
                <input
                  name={field.name}
                  type={field.type}
                  onChange={(e) => {
                    onChange(field.name, e.target.value);
                  }}
                />
              </div>
            );
          })}
        </div>
        <div>
          <h1>Property Management Company Details</h1>
          {newSponsorform.property_management_company.map((field) => {
            return (
              <div key={field.name}>
                <label>{field.title}:</label>
                <br />
                <input
                  type={field.type}
                  name={field.name}
                  onChange={(e) => {
                    onChange(field.name, e.target.value);
                  }}
                />
              </div>
            );
          })}
        </div>
        <div>
          <h1>Broker</h1>
          {newSponsorform.equity_broker_name.map((field) => {
            return (
              <div key={field.name}>
                <label>{field.title}:</label>
                <br />
                <input
                  name={field.name}
                  type={field.type}
                  onChange={(e) => {
                    onChange(field.name, e.target.value);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (key, value) => {
      dispatch({ type: FIELD_CHANGE, payload: { key, value } });
    },
  };
};
export default connect(null, mapDispatchToProps)(SponsorDetails);
