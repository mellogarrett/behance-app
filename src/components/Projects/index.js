import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LinkIcon from "@material-ui/icons/Link";
import Stats from "../Stats";
import { WithAppContext } from "../App";
import get from "../../helpers/get";
import "./Projects.css";

export default class Projects extends Component {
  state = {
    expanded: 0 // project array index
  };

  setExpandedPanel = id => {
    const expanded = this.state.expanded === id;

    this.setState({
      expanded: expanded ? null : id
    });
  };

  render() {
    return (
      <WithAppContext
        render={({ projects }) => (
          <div className="projects">
            <Typography variant="headline" className="projects-title">
              Projects
            </Typography>
            {projects.map((p, index) => {
              const id = get(p, ["id"]);
              const coverImgUrl = get(p, ["covers", "115"]);
              const name = get(p, ["name"]);
              const projectUrl = get(p, ["url"]);
              const stats = get(p, ["stats"]);

              const tags = p.fields.map(field => (
                <Chip key={field} label={field} color="primary" />
              ));

              return (
                <ExpansionPanel
                  key={id}
                  expanded={this.state.expanded === index}
                  onChange={this.setExpandedPanel.bind(undefined, index)}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="subheading">{name}</Typography>
                  </ExpansionPanelSummary>
                  <div className="project-container">
                    <div className="project-row">
                      <div className="projects-stats">
                        <Stats data={stats} />
                        <div className="project-link">
                          <LinkIcon />
                          <a
                            href={projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {projectUrl}
                          </a>
                        </div>
                      </div>
                      <Paper elevation={8} className="project-stats--img">
                        <img alt="project cover" src={coverImgUrl} />
                      </Paper>
                    </div>
                    <div className="projects-stats--tags">{tags}</div>
                  </div>
                </ExpansionPanel>
              );
            })}
          </div>
        )}
      />
    );
  }
}
