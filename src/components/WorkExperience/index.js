import React from "react";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import WorkIcon from "@material-ui/icons/Work";
import "./WorkExperience.css";
import { WithAppContext } from "../App";

export default () => {
  return (
    <WithAppContext
      render={({ workExperience }) => {
        return (
          <div className="work-experience--container">
            <Typography
              variant="headline"
              className="work-experience--title"
              color="inherit"
            >
              Work Experience
            </Typography>
            {workExperience.map(each => {
              const { position, organization, location, start_date } = each;
              const key = Object.values(each).join("-");

              return (
                <div key={key} className="work-experience--item">
                  <div className="work-experience--line-one">
                    <Icon>
                      <WorkIcon />
                    </Icon>
                    <Typography
                      className="work-experience--typography"
                      variant="title"
                      color="inherit"
                    >
                      {position},
                    </Typography>
                    <Typography
                      className="work-experience--typography"
                      variant="title"
                      color="inherit"
                    >
                      {organization}
                    </Typography>
                  </div>
                  <div className="work-experience--line-two">
                    <Typography
                      className="work-experience--typography"
                      variant="subheading"
                      color="inherit"
                    >
                      {location}
                    </Typography>
                    <Typography
                      className="work-experience--typography"
                      variant="subheading"
                      color="inherit"
                    >
                      {start_date}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        );
      }}
    />
  );
};
