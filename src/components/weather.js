import React from "react";
import { connect } from "react-redux";
import Main from "./Main/index";
import SearchBar from "./SearchBar/index";

const Weather = ({ mode, coordinates }) => {
  return (
    <Main>{coordinates && !coordinates.success ? searchBar(mode) : null}</Main>
  );
};

const searchBar = mode => {
  return (
    <div className="flex h-96">
      <div className="m-auto">
        <SearchBar mode={mode} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  mode: state.mode,
  coordinates: state.coordinates
});

export default connect(mapStateToProps)(Weather);
