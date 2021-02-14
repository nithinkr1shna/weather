import { TOGGLE } from "../constants/action-types";
import { DARK, LIGHT } from "../../constants";

const initialState = {
  mode: "dark"
};

function rootReducer(state = initialState, action) {
  if (action.type == TOGGLE) {
    return Object.assign({}, state, {
      mode: action.payload.mode == DARK ? LIGHT : DARK
    });
  }
  return state;
}

export default rootReducer;
