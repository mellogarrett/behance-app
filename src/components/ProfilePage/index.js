import React from "react";
import "./ProfilePage.css";
import { WithAppContext } from "../App";
import "./ProfilePage.css";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import LocationIcon from "@material-ui/icons/LocationOn";
import CancelIcon from "@material-ui/icons/Cancel";
import Typography from "@material-ui/core/Typography";
import get from "../../helpers/get";

export default () => (
  <WithAppContext
    render={({ selectedUser }) => {
      const avatarUrl = get(selectedUser, ["images", "100"]);
      const city = get(selectedUser, ["city"]);
      const country = get(selectedUser, ["country"]);
      const displayName = get(selectedUser, ["display_name"]);
      const appreciations = get(selectedUser, ["stats", "appreciations"]);
      const followers = get(selectedUser, ["stats", "followers"]);

      return (
        <>
          <CancelIcon
            className="profile-page--close"
            style={{ fontSize: "36px" }}
          />
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
                      {`${city}, `}
                    </Typography>
                    <Typography variant="subheading" color="inherit">
                      {country}
                    </Typography>
                    <LocationIcon />
                  </div>
                </div>
                <Avatar className="profile-page--avatar" src={avatarUrl} />
              </div>
            </div>
            <div className="profile-page--stats">
              <Badge badgeContent={followers}>
                <Typography>Followers</Typography>
              </Badge>
            </div>
            <div className="profile-page--right">Links</div>
          </div>
        </>
      );
    }}
  />
);
