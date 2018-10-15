import React from "react";
import "./ProfilePage.css";
import { WithAppContext } from "../App";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import LocationIcon from "@material-ui/icons/LocationOn";
import CancelIcon from "@material-ui/icons/Cancel";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Stats from "../Stats";
import Projects from "../Projects";
import WorkExperience from "../WorkExperience";
import FollowersAndFollowing from "../FollowersAndFollowing";
import get from "../../helpers/get";

export default () => (
  <WithAppContext
    render={({ selectedUser, closeProfilePage }) => {
      const avatarUrl = get(selectedUser, ["images", "100"]);
      const location = get(selectedUser, ["location"]);
      const displayName = get(selectedUser, ["display_name"]);
      const stats = get(selectedUser, ["stats"]);
      const username = get(selectedUser, ["username"]);

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
                    variant="display1"
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
              <Stats
                centered
                data={stats}
                style={{
                  marginTop: "16px",
                  justifyContent: "end"
                }}
              />
              <Divider className="profile-page--divider" />
              <WorkExperience username={username} />
              <FollowersAndFollowing />
            </div>
            <div className="profile-page--right">
              <Projects userId={selectedUser.id} />
            </div>
          </div>
        </>
      );
    }}
  />
);
