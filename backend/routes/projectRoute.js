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

projectRouter.post("/", isAuth, async (req, res) => {
  const project = new Project({
    name: req.body.name,
    user: req.body.user,
  });
  const createdProject = await project.save();
  res.send(createdProject);
});

projectRouter.put("/:id", isAuth, async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (project) {
    project.name = req.body.name;
    const updatedProject = await project.save();
    res.send(updatedProject);
  }
});

projectRouter.delete("/:id", isAuth, async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (project) {
    const deletedProject = await project.remove();
    res.send(deletedProject);
  }
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
      }
    });
    const updatedProject = await project.save();
    res.send(updatedProject);
  }
);

projectRouter.put("/:projectId/addTask", isAuth, async (req, res) => {
  const project = await Project.findById(req.params.projectId);
  project.tasks.push({
    title: req.body.title,
    done: false,
  });
  const updatedProject = await project.save();
  res.send(updatedProject);
});

projectRouter.put(
  "/:projectId/deleteTask/:taskId",
  isAuth,
  async (req, res) => {
    const project = await Project.findById(req.params.projectId);
    const taskId = req.params.taskId;
    const taskIndex = project.tasks.findIndex(function (task) {
      return task.id === taskId;
    });
    if (taskIndex !== -1) {
      project.tasks.splice(taskIndex, 1);
    }
    const updatedProject = await project.save();
    res.send(updatedProject);
  }
);

export default projectRouter;
