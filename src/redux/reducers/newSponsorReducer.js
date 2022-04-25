import {
  SPONSOR_FIELD_CHANGE,
  COMPANY_FIELD_CHANGE,
} from "../actions/newSponsor.js";

const sponsorInitState = {
  sponsorCompanyName: "",
  leadSponsorName: "",
  sponsorAddress: "",
  sponsorWebsiteLink: "",
  sponsorYearOfIncorporation: 0,
  numberOfPrinciples: 0,
  numberOfFulltimeEmployees: 0,
};

const companyInitState = {
  propertyManagementCompanyName: "",
  companyAddress: "",
  companyWebsiteLink: "",
  companyYearOfIncorporation: 0,
  numberOfCommunities: 0,
  numberOfUnitsUnderManagement: 0,
  numberOfBeds: 0,
  commercialSQFUnderManagement: 0,
  officeSQFUnderManagement: 0,
  industrialSQFUnderManagement: 0,
  numberOfTotalEmployees: 0,

  equityBrokersName: 0,
};

export const sponsorReducer = (state = sponsorInitState, action) => {
  switch (action.type) {
    case SPONSOR_FIELD_CHANGE:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};

export const companyReducer = (state = companyInitState, action) => {
  switch (action.type) {
    case COMPANY_FIELD_CHANGE:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};
