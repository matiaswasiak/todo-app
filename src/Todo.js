import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import "./Todo.css";

const Todo = ({ text }) => {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemText primary={text} secondary="Dummy deadline ⏰" />
      </ListItem>
    </List>
  );
};

export default Todo;
