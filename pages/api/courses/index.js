import express from "express";
const app = express();
// app.use(cors);
import { sequelize as db } from "../../../models";
const { Course } = db.models;
app.route("/api/courses").get(async (req, res) => {
  res.send(
    await Course.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] }
    })
  );
});

export default app;