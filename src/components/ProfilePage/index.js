import React from "react";
import { WithAppContext } from "../App";

export default () => (
  <WithAppContext
    render={({ selectedUser }) => (
      <>
        {Object.entries(selectedUser).map(([key, val]) => (
          <div>{`${key}: ${val}`}</div>
        ))}
      </>
    )}
  />
);
