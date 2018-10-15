import React, { Component } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./FollowersAndFollowing.css";

export default class FollowersAndFollowing extends Component {
  state = {
    tab: 0
  };

  setTab = (_, tab) => this.setState({ tab });

  render() {
    console.log(this.state.tab);
    return (
      <div className="followers-following--container">
        <Tabs
          value={this.state.tab}
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
      </div>
    );
  }
}
