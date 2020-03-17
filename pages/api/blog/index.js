import { sequelize as db } from "../../../models";
const { Post } = db.models;

export default async function(req, res) {
  res.send(await Post.findAll());
}