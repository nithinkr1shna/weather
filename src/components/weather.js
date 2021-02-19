import React from "react";
import { connect } from "react-redux";
import Main from "./Main/index";
import SearchBar from "./SearchBar/index";
import * as R from "ramda";

const Weather = ({ location, locationClicked }) => {
  return <Main>{(R.isNil(location) || locationClicked) && searchBar()}</Main>;
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
  location: state.location,
  locationClicked: state.locationClicked
});

export default connect(mapStateToProps)(Weather);
