import React from "react";
import "./SearchInput.css";

import { ReactComponent as Search } from "../../icons/search.svg";

const SearchInput = (props) => {
  return (
    <div className="search-container">
      <input
        className="search-container__input"
        value={props.value}
        onChange={props.onChange}
      />
      <Search className="search-container__search-icon" />
    </div>
  );
};

export default SearchInput;
