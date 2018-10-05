import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import { WithAppContext } from "../App";

export default () => (
  <WithAppContext
    render={({ searchValue, setSearchValue }) => (
      <div className="search">
        <SearchIcon />
        <Input
          disableUnderline
          placeholder="Search..."
          value={searchValue}
          onChange={setSearchValue}
        />
      </div>
    )}
  />
);
