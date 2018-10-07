import React, { Component } from "react";
import "./App.css";
import Search from "../Search";
import debounced from "../../helpers/debounced";
import behanceSearchRequest from "../../network-requests/behance-search";
const { Provider, Consumer } = React.createContext();

export class App extends Component {
  debouncedBehanceSearchRequest = debounced(300, behanceSearchRequest);

  state = {
    searchValue: "",
    setSearchValue: (e, callback) => {
      this.setState({ searchValue: e.target.value }, async () => {
        const searchResults = await this.debouncedBehanceSearchRequest(
          this.state.searchValue
        );
        this.setState({ searchResults });
        callback();
      });
    },
    searchResults: []
  };

  componentDidMount() {
    window.debug = () => console.log(this.state);
  }

  render() {
    return (
      <Provider value={this.state}>
        <div className="container center">
          <Search />
        </div>
      </Provider>
    );
  }
}

export const WithAppContext = ({ render }) => {
  return <Consumer>{context => render(context)}</Consumer>;
};
