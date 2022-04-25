import React, { useState } from "react";
import { connect } from "react-redux";
import {
  SPONSOR_FIELD_CHANGE,
  COMPANY_FIELD_CHANGE,
} from "../../redux/actions/newSponsor";
import { newSponsorform } from "../../Form/Form";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate, Link } from "react-router-dom";

export const SponsorDetails = ({
  onChangeSponsor,
  onChangeCompany,
  sponsorForm,
  companyForm,
}) => {
  const [error, setError] = useState("");

  const writeFormToFirebase = () => {
    const db = getDatabase();
    const uid = localStorage.getItem("uid");
    set(ref(db, "users/" + uid + "/form-details"), {
      sponsorForm,
      companyForm,
    });
  };
  const navigate = useNavigate();

  const handleData = (e) => {
    e.preventDefault();
    let flag = true;
    setError("");
    Object.entries(sponsorForm).every((field) => {
      if (field[1] == "" || field[1] == 0) {
        console.log("here1");
        setError("All fields are required");
        flag = false;
        return false;
      }
      return true;
    });
    Object.entries(companyForm).every((field) => {
      if (field[1] == "" || field[1] == 0) {
        console.log("here2");
        setError("All fields are required");
        flag = false;

        return false;
      }
      return true;
    });
    if (flag) {
      writeFormToFirebase();
      navigate("trackrecord");
    }
  };

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
                    onChangeSponsor(field.name, e.target.value);
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
                    onChangeCompany(field.name, e.target.value);
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
                    onChangeCompany(field.name, e.target.value);
                  }}
                />
              </div>
            );
          })}
        </div>
        <span style={{ color: "red" }}>{error}</span>
        <br />
        <button onClick={handleData}>Submit</button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    sponsorForm: state.sponsorReducer,
    companyForm: state.companyReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeSponsor: (key, value) => {
      dispatch({ type: SPONSOR_FIELD_CHANGE, payload: { key, value } });
    },
    onChangeCompany: (key, value) => {
      dispatch({ type: COMPANY_FIELD_CHANGE, payload: { key, value } });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SponsorDetails);
