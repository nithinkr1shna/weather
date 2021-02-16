import React from "react";

const LocationName = ({ name, styles }) => {
  return (
    <div className="flex text-4xl">
      <span className={styles.text.class}>{name}</span>
    </div>
  );
};

export default LocationName;
