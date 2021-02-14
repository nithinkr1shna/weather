import react from "react";
import { connect } from "react-redux";
import { HiMoon, HiSun } from "react-icons/hi";
import { toggleTheme } from "../../redux/actions/themeActions";

const Toggle = ({ dispatch, mode }) => {
  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {mode === "dark" ? (
        <HiSun
          onClick={() => dispatch(toggleTheme(mode))}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        />
      ) : (
        <HiMoon
          onClick={() => dispatch(toggleTheme(mode))}
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
