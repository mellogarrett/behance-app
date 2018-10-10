import React, { Component } from "react";
import "./App.css";
import Search from "../Search";
import ProfilePage from "../ProfilePage";
import debounced from "../../helpers/debounced";
import behanceSearchRequest from "../../network-requests/behance-search";
import mockUserData from "../../mock/user.json";
const { Provider, Consumer } = React.createContext();

export class App extends Component {
  debouncedBehanceSearchRequest = debounced(500, behanceSearchRequest);

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
    selectedUser: null,
    searchResults: [],
    setSelectedUser: id =>
      this.setState({
        searchValue: "",
        searchResults: [],
        selectedUser: this.state.searchResults
          .filter(user => user.id === id)
          .pop()
      }),
    closeProfilePage: () => this.setState({ selectedUser: null })
  };

  componentDidMount() {
    window.debug = () => console.log(this.state);
    window.state = () => this.state;
    window.test = () => this.setState({ selectedUser: mockUserData });
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.state.selectedUser ? (
          <ProfilePage />
        ) : (
          <div className="container center">
            <Search />
          </div>
        )}
      </Provider>
    );
  }
}

export const WithAppContext = ({ render }) => {
  return <Consumer>{context => render(context)}</Consumer>;
};
