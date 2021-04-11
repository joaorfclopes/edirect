import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import List from "@material-ui/core/List";
import Task from "./Task";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  icon: {
    float: "right",
    padding: 5,
    marginLeft: 5,
  },
  list: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Project(props) {
  const classes = useStyles();

  const project = props.project;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {project.name}
          <IconButton className={classes.icon}>
            <DeleteIcon />
          </IconButton>
          <IconButton className={classes.icon}>
            <EditIcon />
          </IconButton>
        </Typography>
        <br />
        <Divider light />
        <br />
        <Typography color="textSecondary">To Do</Typography>
        <List className={classes.list}>
          {project.tasks &&
            project.tasks.map(
              (task) =>
                !task.done && (
                  <Task key={task._id} task={task} project={project} />
                )
            )}
        </List>
        <Typography color="textSecondary">Done</Typography>
        <List className={classes.list}>
          {project.tasks &&
            project.tasks.map(
              (task) =>
                task.done && (
                  <Task key={task._id} task={task} project={project} />
                )
            )}
        </List>
      </CardContent>
    </Card>
  );
}
