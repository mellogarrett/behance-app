import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default ({ results, keyToDisplay, onClick }) => {
  return (
    <List>
      {results.map(result => (
        <ListItem
          key={result.id}
          button
          dense
          onClick={onClick.bind(undefined, result.id)}
        >
          <ListItemText>{result[keyToDisplay]}</ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
