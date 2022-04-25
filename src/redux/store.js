import { combineReducers } from "redux";
import { sponsorReducer, companyReducer } from "./reducers/newSponsorReducer";
import { trackRecordMultifamilyReducer } from "./reducers/TrackRecordReducer";

export const globalState = combineReducers({
  sponsorReducer,
  companyReducer,
  trackRecordMultifamilyReducer,
});
