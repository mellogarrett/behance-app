import React, { Component } from "react";
import "./App.css";
import Search from "../Search";
const { Provider, Consumer } = React.createContext();

export class App extends Component {
  state = {
    searchValue: "",
    setSearchValue: e => this.setState({ searchValue: e.target.value })
  };

  componentDidMount() {
    window.debug = () => console.log(this.state);
  }

  render() {
    return (
      <Provider value={this.state}>
        <Search />
      </Provider>
    );
  }
}

export const WithAppContext = ({ render }) => {
  return <Consumer>{context => render(context)}</Consumer>;
};
