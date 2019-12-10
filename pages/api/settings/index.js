import express from "express";
const app = express();
// app.use(cors);
import { sequelize as db } from "../../../models";
const { Settings } = db.models;
app.route("/api/settings").get(async (req, res) => {
  const allSettings = await Settings.findAll({
    attributes: { exclude: ["createdAt", "updatedAt", "id"] }
  });
  let settings = {};
  allSettings.forEach(item => {
    settings[item.name] = item.body;
  });
  return res.send(settings);
});

export default app;
