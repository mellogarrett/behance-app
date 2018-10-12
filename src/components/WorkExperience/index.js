import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import "./WorkExperience.css";
import getWorkExperience from "../../network-requests/get-work-experience";

export default class WorkExperience extends Component {
  state = {
    workExperience: []
  };

  componentWillMount = async () => {
    try {
      const { username } = this.props;
      const workExperience = await getWorkExperience(username);
      this.setState({ workExperience });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <List>
        {this.state.workExperience.map(each => {
          const { position, organization, location, start_date } = each;

          return (
            <ListItem>
              <Typography>{position}</Typography>
            </ListItem>
          );
        })}
      </List>
    );
  }
}
