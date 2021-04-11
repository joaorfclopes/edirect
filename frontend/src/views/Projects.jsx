import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import { useDispatch, useSelector } from "react-redux";
import { listProjects } from "../actions/projectActions";

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

  useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.grid}>
          {projects &&
            projects.map((project) => (
              <Grid key={project._id} item xs={12} sm={6} md={3}>
                <Project project={project} />
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
}
