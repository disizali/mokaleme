import express from "express";
const app = express();
// app.use(cors);
import { sequelize as db } from "../../../models";
const { Teacher } = db.models;
app.route("/api/teachers").get(async (req, res) => {
  res.send(
    await Teacher.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] }
    })
  );
});

export default app;