import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/Navbar";
import Project from "../components/Project";

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

  const userInfo = JSON.parse(props.userInfo);

  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("/api/projects", {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    setProjects(data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar userInfo={userInfo} />
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.grid}>
          {projects &&
            projects.map((project) => (
              <Grid key={project._id} item xs={12} sm={6} md={3}>
                <Project project={project} userInfo={userInfo} />
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
}
