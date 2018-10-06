import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import { WithAppContext } from "../App";

export default () => (
  <WithAppContext
    render={({ searchValue, setSearchValue }) => (
      <div className="search--container">
        <Typography variant="display3" gutterBottom>
          Behance Search
        </Typography>
        <div className="search--input">
          <SearchIcon />
          <Input
            fullWidth
            disableUnderline
            placeholder="Search..."
            value={searchValue}
            onChange={setSearchValue}
          />
        </div>
      </div>
    )}
  />
);
