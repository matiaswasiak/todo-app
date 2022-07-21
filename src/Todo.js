import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const Todo = ({ text }) => {
  return (
    <List>
      <ListItem>
        <ListItemText primary="Todo" secondary={text} />
      </ListItem>
    </List>
  );
};

export default Todo;
