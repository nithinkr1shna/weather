import React from "react";
import { connect } from "react-redux";
import { HiMoon, HiSun } from "react-icons/hi";
import { toggleTheme } from "../../redux/actions/themeActions";
import { DARK } from "../../constants";

const Toggle = ({ dispatch, mode }) => {
  const { theme } = mode;

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === DARK ? (
        <HiSun
          onClick={() => dispatch(toggleTheme(theme))}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      ) : (
        <HiMoon
          onClick={() => dispatch(toggleTheme(theme))}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  mode: state.mode
});

export default connect(mapStateToProps)(Toggle);
