import {
  TOGGLE,
  SET_LOCATION,
  SET_COORDINATES,
  SET_LOCATION_CLICKED
} from "../constants/action-types";
import { themeDark } from "../../constants";

const initialState = {
  mode: themeDark(),
  location: null,
  locationClicked: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE:
      return Object.assign({}, state, {
        mode: action.payload.mode
      });
    case SET_COORDINATES:
      return Object.assign({}, state, {
        coordinates: action.payload.coordinates
      });
    case SET_LOCATION:
      return Object.assign({}, state, {
        location: action.payload.location,
        locationClicked: false
      });
    case SET_LOCATION_CLICKED:
      return Object.assign({}, state, {
        locationClicked: !state.locationClicked
      });
    default:
      return state;
  }
}

export default rootReducer;
