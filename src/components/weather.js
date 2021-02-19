import React from "react";
import { connect } from "react-redux";
import Main from "./Main/index";
import SearchBar from "./SearchBar/index";
import * as R from "ramda";

const Weather = ({ location }) => {
  return <Main>{R.isNil(location) && searchBar()}</Main>;
};

const searchBar = () => {
  return (
    <div className="flex h-96">
      <div className="m-auto">
        <SearchBar />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  coordinates: state.coordinates,
  location: state.location
});

export default connect(mapStateToProps)(Weather);
