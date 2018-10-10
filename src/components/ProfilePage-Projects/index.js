import React, { Component } from "react";
import getProjectsForUser from "../../network-requests/get-projects-for-user";

export default class Projects extends Component {
  state = {
    projects: []
  };

  componentWillMount = async () => {
    try {
      const { userId } = this.props;
      const projects = await getProjectsForUser(userId);
      this.setState({ projects });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    console.log(this.state.projects);
    return (
      <div>
        {this.state.projects.map(p => {
          console.log(p);
          console.log();
          return <div>{p.name}</div>;
        })}
      </div>
    );
  }
  catch(err) {
    console.log(err);
  }
}
