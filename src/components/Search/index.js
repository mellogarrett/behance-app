import React, { Component } from "react";
import "./Search.css";
import Card from "@material-ui/core/Card";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import ResultsList from "../ResultsList";
import { WithAppContext } from "../App";

export default class Search extends Component {
  state = {
    loading: false
  };

  render() {
    return (
      <WithAppContext
        render={({
          searchValue,
          setSearchValue,
          searchResults,
          setSelectedUser
        }) => {
          const onChange = e => {
            this.setState({ loading: true });
            // once the search completes, set loading back to false
            setSearchValue(e, () => this.setState({ loading: false }));
          };

          return (
            <Card className="search-container">
              <Typography variant="display3" gutterBottom>
                Behance Search
              </Typography>
              <div className="search-input">
                {this.state.loading ? (
                  <div className="search-input--loading-wrapper">
                    <CircularProgress size={18} thickness={4} color="inherit" />
                  </div>
                ) : (
                  <SearchIcon />
                )}
                <Input
                  fullWidth
                  disableUnderline
                  placeholder="Search..."
                  value={searchValue}
                  onChange={onChange}
                />
              </div>
              <ResultsList
                results={searchResults}
                keyToDisplay="username"
                onClick={setSelectedUser}
              />
            </Card>
          );
        }}
      />
    );
  }
}
