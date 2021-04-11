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
import { useDispatch } from "react-redux";
import { deleteProject, updateProject } from "../actions/projectActions";
import Modal from "./Modal";
import Alert from "./Alert";

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

  const dispatch = useDispatch();

  const project = props.project;

  const [openAlert, setOpenAlert] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [projectName, setProjectName] = React.useState(project.name);

  const deleteHandler = () => {
    dispatch(deleteProject(project._id));
  };

  const updateHandler = () => {
    dispatch(
      updateProject({
        _id: project._id,
        name: projectName,
        tasks: project.tasks,
        user: project.user,
      })
    );
  };

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenAlert(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {project.name}
          <IconButton onClick={handleOpenAlert} className={classes.icon}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={handleOpenModal} className={classes.icon}>
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
      <Modal
        modalTitle="Update Product"
        modalButtonText="Update"
        open={openModal}
        handleClose={handleCloseModal}
        setProjectName={setProjectName}
        update={updateHandler}
        value={projectName}
      />
      <Alert
        open={openAlert}
        handleClose={handleCloseAlert}
        deleteHandler={deleteHandler}
      />
    </Card>
  );
}
