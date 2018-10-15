import React, { Component } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ResultsList from "../ResultsList";
import "./FollowersAndFollowing.css";
import { WithAppContext } from "../App";

export default class FollowersAndFollowing extends Component {
  state = {
    tab: 0
  };

  setTab = (_, tab) => this.setState({ tab });

  render = () => (
    <WithAppContext
      render={({ followers, following }) => {
        const { tab } = this.state;

        return (
          <div className="followers-following--container">
            <Tabs
              value={tab}
              onChange={this.setTab}
              fullWidth
              className="followers-following--tabs"
              classes={{
                indicator: "followers-following--tab-indicator"
              }}
            >
              <Tab label="Followers" />
              <Tab label="Following" />
            </Tabs>
            <div className="followers-following--content">
              {tab === 0 && (
                <ResultsList
                  results={followers}
                  keyToDisplay="username"
                  textClass="followers-following--list-item"
                />
              )}
              {tab === 1 && (
                <ResultsList
                  results={following}
                  keyToDisplay="username"
                  textClass="followers-following--list-item"
                />
              )}
            </div>
          </div>
        );
      }}
    />
  );
}
