import React from "react";
import "./ProfilePage.css";
import { WithAppContext } from "../App";
import "./ProfilePage.css";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import LocationIcon from "@material-ui/icons/LocationOn";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import CancelIcon from "@material-ui/icons/Cancel";
import Typography from "@material-ui/core/Typography";
import get from "../../helpers/get";

export default () => (
  <WithAppContext
    render={({ selectedUser, closeProfilePage }) => {
      const avatarUrl = get(selectedUser, ["images", "100"]);
      const location = get(selectedUser, ["location"]);
      const displayName = get(selectedUser, ["display_name"]);
      // stats
      const followers = get(selectedUser, ["stats", "followers"]);
      const following = get(selectedUser, ["stats", "following"]);
      const appreciations = get(selectedUser, ["stats", "appreciations"]);
      const views = get(selectedUser, ["stats", "views"]);
      const comments = get(selectedUser, ["stats", "comments"]);

      return (
        <>
          <IconButton
            onClick={closeProfilePage}
            className="profile-page--close"
          >
            <CancelIcon style={{ fontSize: "36px" }} />
          </IconButton>
          <div className="profile-page--container">
            <div className="profile-page--left">
              <div className="profile-page--header">
                <div className="stacked center-vertical align-right">
                  <Typography
                    variant="headline"
                    color="inherit"
                    style={{ fontWeight: "600" }}
                  >
                    {displayName}
                  </Typography>
                  <div className="profile-page--location">
                    <Typography variant="subheading" color="inherit">
                      {location}
                    </Typography>
                    <LocationIcon />
                  </div>
                </div>
                <Avatar className="profile-page--avatar" src={avatarUrl} />
              </div>
              <div className="profile-page--stats">
                <div className="profile-page--stats-grid">
                  <div className="profile-page--stats-label">Followers:</div>
                  <div className="profile-page--stats-value">{followers}</div>
                  <div className="profile-page--stats-label">Following:</div>
                  <div className="profile-page--stats-value">{following}</div>
                  <div className="profile-page--stats-label">
                    Appreciations:
                  </div>
                  <div className="profile-page--stats-value">
                    {appreciations}
                  </div>
                  <div className="profile-page--stats-label">Views:</div>
                  <div className="profile-page--stats-value">{views}</div>
                  <div className="profile-page--stats-label">Comments:</div>
                  <div className="profile-page--stats-value">{comments}</div>
                </div>
              </div>
            </div>

            <div className="profile-page--right">Links</div>
          </div>
        </>
      );
    }}
  />
);
