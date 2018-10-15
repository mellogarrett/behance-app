import React from "react";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import WorkIcon from "@material-ui/icons/Work";
import { format } from "date-fns";
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

              // start_date
              let month, year, startDateObj, startDateString;
              if (start_date) {
                month = parseInt(start_date.slice(0, 2)) - 1;
                year = parseInt(start_date.slice(-4));
                startDateObj = new Date();
                startDateObj.setMonth(month);
                startDateObj.setFullYear(year);
                startDateString = format(startDateObj, "MMM YYYY");
              }

              return (
                <div key={key} className="work-experience--item">
                  <div className="work-experience--line-one">
                    <Typography
                      className="work-experience--typography work-experience--position"
                      variant="subheading"
                      color="inherit"
                    >
                      {position},
                    </Typography>
                    <Typography
                      className="work-experience--typography"
                      variant="subheading"
                      color="inherit"
                    >
                      {organization}
                    </Typography>
                    <Icon className="work-experience--icon">
                      <WorkIcon />
                    </Icon>
                  </div>
                  <div className="work-experience--line-two">
                    <Typography
                      className="work-experience--typography"
                      variant="subheading"
                      color="inherit"
                    >
                      {location}
                    </Typography>
                    {startDateString && (
                      <>
                        <Typography
                          className="work-experience--typography"
                          variant="subheading"
                          color="inherit"
                        >
                          —
                        </Typography>
                        <Typography
                          className="work-experience--typography"
                          variant="subheading"
                          color="inherit"
                        >
                          {startDateString}
                        </Typography>
                      </>
                    )}
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
