import React, { useEffect, useState } from "react";
import { getGeoLocation } from "../../utils";

import { connect } from "react-redux";
import {
  setCoordinates,
  setLocation
} from "../../../redux/actions/locationActions";
import { getWeatherInformation } from "../../../adapters";
import LocationNameAndTime from "./LocationNameAndTIme";

const Location = ({ dispatch, coordinates, location, mode }) => {
  useEffect(() => {
    getGeoLocation(onSuccess, onError);
  }, []);

  useEffect(() => {
    if (coordinates) {
      if (coordinates.success) {
        getWeatherInformation(coordinates).then(response =>
          dispatch(
            setLocation({
              location: response.data
            })
          )
        );
      }
    }
  }, [coordinates]);

  const onSuccess = position => {
    dispatch(
      setCoordinates({
        coordinates: {
          success: true,
          coordinates: position.coords,
          errorMessage: null
        }
      })
    );
  };

  const onError = err => {
    dispatch(
      setCoordinates({
        coordinates: {
          success: false,
          coordinates: null,
          errorMessage: `${err.code}: ${err.message}`
        }
      })
    );
  };

  const { styles } = mode;

  return (
    <div>
      <LocationNameAndTime name={location && location.name} styles={styles} />
    </div>
  );
};

const mapStateToProps = state => ({
  coordinates: state.coordinates,
  location: state.location,
  mode: state.mode
});

export default connect(mapStateToProps)(Location);
