import {
  SET_LOCATION,
  SET_COORDINATES,
  SET_LOCATION_CLICKED
} from "../constants/action-types";

export const setCoordinates = payload => ({
  type: SET_COORDINATES,
  payload: payload
});

export const setLocation = payload => ({
  type: SET_LOCATION,
  payload: payload
});

export const setLocationClicked = () => ({
  type: SET_LOCATION_CLICKED
});
