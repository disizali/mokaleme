import express from "express";
const app = express();
// app.use(cors);
import { sequelize as db } from "../../../models";
const { Slide } = db.models;
app.route("/api/slides").get(async (req, res) => {
  res.send(
    await Slide.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] }
    })
  );
});

export default app;