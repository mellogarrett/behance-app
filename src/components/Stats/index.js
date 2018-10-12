import React from "react";
import "./Stats.css";
import { capitalize } from "underscore.string";

export default ({ data, style, centered }) =>
  centered ? (
    <div className="stats-grid" style={style}>
      {Object.entries(data).map(([key, val]) => (
        <React.Fragment key={key}>
          <div className="stats-label">{capitalize(key)}: </div>
          <div className="stats-value">{val}</div>
        </React.Fragment>
      ))}
    </div>
  ) : (
    <div className="stats-list" style={style}>
      {Object.entries(data).map(([key, val]) => (
        <div key={key} className="stats-item">
          <div className="stats-label">{capitalize(key)}: </div>
          <div className="stats-value">{val}</div>
        </div>
      ))}
    </div>
  );
