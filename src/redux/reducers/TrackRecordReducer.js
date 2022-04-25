import { AssuredWorkloadSharp } from "@mui/icons-material";
import { TRACK_RECORD_FIELD_CHANGE } from "../actions/newSponsor.js";

const TrackRecordMultifamilyInitState = {
  numberOfAssetsOwnedByTheCompany: {
    sinceIncorporation: 0,
    soldOrRefi: 0,
    today: 0,
  },
  value: {
    sinceIncorporation: 0,
    soldOrRefi: 0,
    today: 0,
  },
  sNumberOfUnits: {
    sinceIncorporation: 0,
    soldOrRefi: 0,
    today: 0,
  },
};

export const trackRecordMultifamilyReducer = (
  state = TrackRecordMultifamilyInitState,
  action
) => {
  switch (action.type) {
    case TRACK_RECORD_FIELD_CHANGE:
      return { ...state };

    default:
      return state;
  }
};
