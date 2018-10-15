import React, { Component } from "react";
import mockState from "../../mock/state.json";
import "./App.css";
import Search from "../Search";
import ProfilePage from "../ProfilePage";
import debounced from "../../helpers/debounced";
import userSearch from "../../network-requests/user-search";
import getProjectsForUser from "../../network-requests/get-projects-for-user";
import getWorkExperienceForUser from "../../network-requests/get-work-experience-for-user";
import getFollowersForUser from "../../network-requests/get-followers-for-user";
import getFollowingForUser from "../../network-requests/get-following-for-user";
const { Provider, Consumer } = React.createContext();

export class App extends Component {
  debouncedUserSearch = debounced(500, userSearch);

  state = {
    searchValue: "",
    setSearchValue: (e, callback) => {
      this.setState({ searchValue: e.target.value }, async () => {
        const searchResults = await this.debouncedUserSearch(
          this.state.searchValue
        );
        this.setState({ searchResults });
        callback();
      });
    },
    selectedUser: null,
    searchResults: [],
    projects: [],
    workExperience: [],
    followers: [],
    following: [],
    setSelectedUser: async id => {
      const selectedUser = this.state.searchResults
        .filter(user => user.id === id)
        .pop();
      // set user, clear search
      this.setState({
        searchValue: "",
        searchResults: [],
        selectedUser
      });
      // get & set projects
      const projects = await getProjectsForUser(selectedUser.id);
      this.setState({ projects });
      // get & set work experience
      const workExperience = await getWorkExperienceForUser(
        selectedUser.username
      );
      this.setState({ workExperience });
      // get & set followers
      const followers = await getFollowersForUser(selectedUser.username);
      this.setState({ followers });
      // get & set following
      const following = await getFollowingForUser(selectedUser.username);
      this.setState({ following });
    },
    closeProfilePage: () =>
      this.setState({ selectedUser: null, projects: [], workExperience: [] })
  };

  componentDidMount() {
    window.debug = () => console.log(this.state);
    window.state = () => this.state;
    window.test = () => this.setState(mockState);
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
