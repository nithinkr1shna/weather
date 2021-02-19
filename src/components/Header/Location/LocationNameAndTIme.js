import React from "react";
import Time from "./Time";
import { connect } from "react-redux";
import { setLocationClicked } from "../../../redux/actions/locationActions";

const LocationNameAndTime = ({ dispatch, name, mode }) => {
  const { styles } = mode;

  const handleLocationClick = () => {
    dispatch(setLocationClicked());
  };

  return (
    <div>
      <LocationName
        name={name}
        styles={styles}
        handleLocationClick={handleLocationClick}
      />
      <Time styles={styles} />
    </div>
  );
};

const LocationName = ({ name, styles, handleLocationClick }) => {
  return (
    <div className="flex text-4xl cursor-pointer" onClick={handleLocationClick}>
      <span className={styles.text.colorPrimary.class}>{name}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  coordinates: state.coordinates,
  mode: state.mode
});

export default connect(mapStateToProps)(LocationNameAndTime);
