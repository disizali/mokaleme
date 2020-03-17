import express from "express";
const app = express();
// app.use(cors);
import { sequelize as db } from "../../../models";
const { Course, Book } = db.models;
app.get("/api/:title/books", async (req, res) => {
  res.send(
    await Course.findOne({
      where: { title: decodeURI(req.params.title) },
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: [{ model: Book }],
      rawQuery: true
    })
  );
});

export default app;
