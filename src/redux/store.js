import { combineReducers } from "redux";
import { sponsorReducer, companyReducer } from "./reducers/newSponsorReducer";

export const globalState = combineReducers({
  sponsorReducer,
  companyReducer,
});
