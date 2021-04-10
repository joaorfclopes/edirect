import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
import projectRoute from "./routes/projectRoute.js";

const app = express();

const PORT = 5000;

mongoose.connect("mongodb://localhost/edirect", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use("/api/users", userRoute);
app.use("/api/projects", projectRoute);

app.get("/api/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
