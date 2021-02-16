import { SET_LOCATION, SET_COORDINATES } from "../constants/action-types";

export const setCoordinates = payload => ({
  type: SET_COORDINATES,
  payload: payload
});

export const setLocation = payload => ({
  type: SET_LOCATION,
  payload: payload
});
