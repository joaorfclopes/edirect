import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";

export default function Task(props) {
  const task = props.task;

  const [checked, setChecked] = useState(task.done);

  return (
    <ListItem key={task._id} role={undefined} dense button>
      <ListItemIcon>
        <Checkbox
          checked={checked}
          onChange={() => setChecked(!checked)}
          edge="start"
          color="primary"
          inputProps={{
            "aria-labelledby": `checkbox-list-label-${task._id}`,
          }}
        />
      </ListItemIcon>
      <ListItemText id={task._id} primary={task.title} />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="clear">
          <ClearIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
