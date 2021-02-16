import {
  TOGGLE,
  SET_LOCATION,
  SET_COORDINATES
} from "../constants/action-types";
import { DARK, LIGHT, themeDark } from "../../constants";

const initialState = {
  mode: themeDark(),
  location: null
};

function rootReducer(state = initialState, action) {
  if (action.type === TOGGLE) {
    return Object.assign({}, state, {
      mode: action.payload.mode
    });
  }
  if (action.type === SET_COORDINATES) {
    return Object.assign({}, state, {
      coordinates: action.payload.coordinates
    });
  }
  if (action.type === SET_LOCATION) {
    return Object.assign({}, state, {
      location: action.payload.location
    });
  }
  return state;
}

export default rootReducer;
