import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";

const AppLayout = ({ mode, children }) => {
  return (
    <div className={`${theme(mode)} min-h-screen w-full`}>
      <Header />
      {children}
    </div>
  );
};

const theme = mode => {
  if (mode == "dark") return "bg-gray-800";
  return "bg-gray-100";
};

const mapStateToProps = state => ({
  mode: state.mode
});

export default connect(mapStateToProps)(AppLayout);
