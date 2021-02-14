import { TOGGLE } from "../constants/action-types";

export const toggleMode = payload => {
  return { type: TOGGLE, payload };
};
