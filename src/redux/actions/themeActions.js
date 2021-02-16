import { DARK, LIGHT, themeLight, themeDark } from "../../constants";
import { TOGGLE } from "../constants/action-types";

export const toggleTheme = theme => ({
  type: TOGGLE,
  payload: {
    mode: generateModeAndStyle(theme)
  }
});

const generateModeAndStyle = theme => {
  if (theme === LIGHT) {
    return themeDark();
  }
  return themeLight();
};
