import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";

const AppLayout = ({ mode, children }) => {
  return (
    <div className={`${mode.styles.bgColor.class} min-h-screen w-full`}>
      <div className="p-5">
        <Header />
        {children}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  mode: state.mode
});

export default connect(mapStateToProps)(AppLayout);
