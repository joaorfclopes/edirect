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
  const projects = await Project.find({ user: req.user._id });
  res.send(projects);
});

projectRouter.put(
  "/:projectId/toggleTask/:taskId",
  isAuth,
  async (req, res) => {
    const project = await Project.findById(req.params.projectId);
    const taskId = req.params.taskId;
    project.tasks.map(async (task) => {
      if (task._id == taskId) {
        task.done = !task.done;
        const updatedProject = await project.save();
        res.send(updatedProject);
      }
    });
  }
);

projectRouter.get("/:projectId/tasks", isAuth, async (req, res) => {
  const project = await Project.findById(req.params.projectId);
  const tasks = project.tasks;
  res.send(tasks);
});

export default projectRouter;
