import { DARK, LIGHT } from "../../constants";
import { TOGGLE } from "../constants/action-types";

export const toggleTheme = mode => ({
  type: TOGGLE,
  payload: {
    mode: mode
  }
});
