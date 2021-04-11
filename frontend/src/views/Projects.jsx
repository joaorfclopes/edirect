import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import { useDispatch, useSelector } from "react-redux";
import { listProjects } from "../actions/projectActions";
import {
  PROJECT_DELETE_RESET,
  TOGGLE_TASK_RESET,
} from "../constants/projectConstants";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: 10,
  },
  grid: {
    paddingTop: 10,
  },
}));

export default function Projects(props) {
  const classes = useStyles();

  const dispatch = useDispatch();
  const projectList = useSelector((state) => state.projectList);
  const { projects } = projectList;
  const toggleTask = useSelector((state) => state.toggleTask);
  const { success: successToggle } = toggleTask;
  const projectDelete = useSelector((state) => state.projectDelete);
  const { success: successDelete } = projectDelete;

  useEffect(() => {
    dispatch(listProjects());
    if (successToggle || successDelete) {
      dispatch({ type: TOGGLE_TASK_RESET });
      dispatch({ type: PROJECT_DELETE_RESET });
    }
  }, [dispatch, successToggle, successDelete]);

  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.grid}>
          {projects &&
            projects.map((project) => (
              <Grid key={project._id} item xs={12} sm={6} md={4}>
                <Project project={project} />
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
}
