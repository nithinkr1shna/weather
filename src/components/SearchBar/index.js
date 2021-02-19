import React, { useState } from "react";
import { getWeatherInformationByName } from "../../adapters/index";
import { connect } from "react-redux";
import { setLocation } from "../../redux/actions/locationActions";
import { validateNotEmpty } from "../utils";

const SearchBar = ({ dispatch, mode }) => {
  const [searchLocation, setSearchLocation] = useState("");

  const handleChange = e => {
    setSearchLocation(e.target.value);
  };

  const handleKeyDown = event => {
    if (event.key == "Enter" && event.shiftKey) {
      if (validateNotEmpty(searchLocation))
        getWeatherInformationByName(searchLocation)
          .then(response =>
            dispatch(
              setLocation({
                location: response.data
              })
            )
          )
          .catch(res => console.log(res));
    }
  };

  return (
    <div className="pt-2 relative mx-auto text-gray-600 block">
      <input
        className={`border-0 border-b-2 border-white-600 ${mode.styles.bgColor.class} h-10 px-5 pr-16 text-xl focus:outline-none`}
        name="search"
        value={searchLocation}
        onChange={e => handleChange(e)}
        onKeyDown={handleKeyDown}
      />
      <div className="text-xs text-muted pt-1 text-center">
        <span className={`${mode.styles.text.colorSecondary.class}`}>
          Shift + Enter to search
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  mode: state.mode
});

export default connect(mapStateToProps)(SearchBar);
