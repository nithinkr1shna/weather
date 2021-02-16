import React from "react";
import Time from "./Time";

const LocationNameAndTime = ({ name, styles }) => {
  return (
    <div>
      <LocationName name={name} styles={styles} />
      <Time styles={styles} />
    </div>
  );
};
const LocationName = ({ name, styles }) => {
  return (
    <div className="flex text-4xl">
      <span className={styles.text.colorPrimary.class}>{name}</span>
    </div>
  );
};
export default LocationNameAndTime;
