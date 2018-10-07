import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default ({ results, keyToDisplay }) => {
  return (
    <List>
      {results.map(result => (
        <ListItem key={result.id} button dense>
          <ListItemText>{result[keyToDisplay]}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
