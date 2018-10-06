import React, { Component } from "react";
import "./App.css";
import Search from "../Search";
import debounced from "../../helpers/debounced";
import behanceSearchRequest from "../../network-requests/behance-search";
const { Provider, Consumer } = React.createContext();

export class App extends Component {
  debouncedBehanceSearchRequest = debounced(600, behanceSearchRequest);

  state = {
    searchValue: "",
    setSearchValue: e => {
      this.setState({ searchValue: e.target.value }, () => {
        // console.log(behanceSearchRequest(this.state.searchValue));
        console.log(this.debouncedBehanceSearchRequest(this.state.searchValue));
        this.debouncedBehanceSearchRequest(this.state.searchValue).then(
          response => console.log(response)
        );
      });
    }
  };

  componentDidMount() {
    window.debug = () => console.log(this.state);
  }

  render() {
    return (
      <Provider value={this.state}>
        <div className="container">
          <Search />
        </div>
      </Provider>
    );
  }
}

export const WithAppContext = ({ render }) => {
  return <Consumer>{context => render(context)}</Consumer>;
};
