import React from "react";
import { connect } from "react-redux";

const PanelLayout = ({ mode, children }) => {
  return <div className={`${theme(mode)}`}>{children}</div>;
};

const theme = mode => {
  if (mode == "dark") return "bg-gray-100";
  return "bg-gray-800";
  // return "";
};

const mapStateToProps = state => ({
  mode: state.mode
});

export default connect(mapStateToProps)(PanelLayout);
