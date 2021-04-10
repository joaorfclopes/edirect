import express from "express";
import data from "../data.js";
import Project from "../models/projectModel.js";
import { isAuth } from "../utils.js";

const projectRouter = express.Router();

projectRouter.get("/seed", async (req, res) => {
  const createdProjects = await Project.insertMany(data.projects);
  res.send({ createdProjects });
});

projectRouter.get("/", isAuth, async (req, res) => {
  const orders = await Project.find({ user: req.user._id });
  res.send(orders);
});

export default projectRouter;
