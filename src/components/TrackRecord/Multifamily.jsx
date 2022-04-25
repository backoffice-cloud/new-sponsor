import React from "react";
import { connect } from "react-redux";
import { TRACK_RECORD_FIELD_CHANGE } from "../../redux/actions/newSponsor";

const Multifamily = ({ onChangeSponsor }) => {
  return (
    <div>
      <h4>Number of assets owned by the company:</h4>
      <label>Since Incorporation:</label>
      <br />
      <input
        type="number"
        placeholder="Since Incorporation..."
        onChange={(e) =>
          onChangeSponsor(
            "sinceIncorporation",
            e.target.value,
            "numberOfAssetsOwnedByTheCompany"
          )
        }
      />
      <br />
      <label>Sold / Refi:</label>
      <br />
      <input type="number" placeholder="Sold / Refi..." />
      <br />
      <label>Today:</label>
      <br />
      <input type="number" placeholder="Today..." />
      <br />
      <h4>Value:</h4>
      <label>Since Incorporation:</label>
      <br />

      <input type="number" placeholder="Since Incorporation..." />
      <br />
      <label>Sold / Refi:</label>
      <br />
      <input type="number" placeholder="Sold / Refi..." />
      <br />
      <label>Today:</label>
      <br />
      <input type="number" placeholder="Today..." />
      <br />
      <h4>sNumber of units:</h4>
      <label>Since Incorporation:</label>
      <br />

      <input type="number" placeholder="Since Incorporation..." />
      <br />
      <label>Sold / Refi:</label>
      <br />
      <input type="number" placeholder="Sold / Refi..." />
      <br />
      <label>Today:</label>
      <br />
      <input type="number" placeholder="Today..." />
      <br />
      <button>Submit</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeSponsor: (key, value, title) => {
      dispatch({
        type: TRACK_RECORD_FIELD_CHANGE,
        payload: { key, value, title },
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(Multifamily);
