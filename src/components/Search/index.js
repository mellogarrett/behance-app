import React, { Component } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { WithAppContext } from "../App";

export default class Search extends Component {
  state = {
    loading: false
  };

  render() {
    return (
      <WithAppContext
        render={({ searchValue, setSearchValue }) => {
          const onChange = e => {
            this.setState({ loading: true });
            // once the search completes, set loading back to false
            setSearchValue(e, () => this.setState({ loading: false }));
          };

          return (
            <div className="search--container">
              <Typography variant="display3" gutterBottom>
                Behance Search
              </Typography>
              <div className="search--input">
                {this.state.loading ? <CircularProgress /> : <SearchIcon />}
                <Input
                  fullWidth
                  disableUnderline
                  placeholder="Search..."
                  value={searchValue}
                  onChange={onChange}
                />
              </div>
            </div>
          );
        }}
      />
    );
  }
}
