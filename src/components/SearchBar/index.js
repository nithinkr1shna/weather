import React from "react";

const SearchBar = ({ mode }) => {
  return (
    <div className="pt-2 relative mx-auto text-gray-600">
      <input
        class={`border-0 border-b-2 border-white-600 ${mode.styles.bgColor.class} h-10 px-5 pr-16 text-xl focus:outline-none`}
        name="search"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
