import {
  SPONSOR_DETAILS_FAILED,
  SPONSOR_DETAILS_SAVE,
  SPONSOR_DETAILS_SUCCESS,
  SPONSOR_DETAILS_REQUESTED,
  SPONSOR_STATE_POPULATE,
  SPONSOR_FIELD_OPTIONS_FAILED,
  SPONSOR_FIELD_OPTIONS_SUCCESS,
  SPONSOR_FIELD_OPTIONS_REQUESTED,
  SPONSOR_NEW_SUBMITTED,
  SPONSOR_NEW_SUCCESS,
  SPONSOR_NEW_FAILED,
  SPONSOR_NEW_SAVE_FIELD_STATE,
  SPONSOR_NEW_NEXT_STEP,
  SPONSOR_NEW_PREV_STEP,
  SPONSOR_NEW_TOGGLE_NEW_ASSET,
  SPONSOR_NEW_SAVE_ASSET_FIELD,
  SPONSOR_EXISTING_SAVE_ASSET_FIELD,
  SPONSOR_SAVE_ALL_ASSETS,
  SPONSOR_EDIT_ASSET,
  SPONSOR_RESET_STEP,
  SPONSOR_ERROR,
  SPONSOR_NEW_INIT,
  SPONSOR_MOVE_TO_STEP,
  SPONSOR_ERRORS_CLEAR,
  SPONSOR_DETAILS_SAVED_SUCCESS,
  SPONSOR_CLEAR_ALERTS,
  SPONSOR_SET_ID,
  FIELD_CHANGE,
} from "../actions/newSponsor.js";

const sponsorInitState = {
  sponsorCompanyName: "",
  leadSponsorName: "",
  address: "",
  websiteLink: "",
  yearOfIncorporation: 0,
  numberOfPrinciples: 0,
  numberOfFulltimeEmployees: 0,
};

const companyInitState = {
  propertyManagementCompanyName: "",
  address: "",
  websiteLink: "",
  yearOfIncorporation: 0,
  numberOfCommunities: 0,
  numberOfUnitsUnderManagement: 0,
  numberOfBeds: 0,
  commercialSQFUnderManagement: 0,
  officeSQFUnderManagement: 0,
  numberOfTotalEmployees: 0,
  equityBrokersName: 0,
};

export const sponsorReducer = (state = sponsorInitState, action) => {
  switch (action.type) {
    case FIELD_CHANGE:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};

export const companyReducer = (state = companyInitState, action) => {
  switch (action.type) {
    case FIELD_CHANGE:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};
