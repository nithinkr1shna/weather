import React from "react";
import Toggle from "./Toggle";
import Location from "./Location/index";

const Header = () => {
  return (
    <div className="flex flex-wrap justify-between">
      <Location />
      <Toggle />
    </div>
  );
};

export default Header;
