import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default ({
  results,
  keyToDisplay,
  onClick = [],
  isButton,
  textClass
}) => {
  const [fn, boundProperty] = onClick;

  return (
    <List>
      {results.map(result => (
        <ListItem
          key={result.id}
          button={isButton}
          dense
          onClick={
            fn && boundProperty
              ? fn.bind(undefined, result[boundProperty])
              : null
          }
        >
          <ListItemText classes={{ root: textClass }}>
            {result[keyToDisplay]}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};
