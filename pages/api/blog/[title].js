import { sequelize as db } from "../../../models";
const { Post } = db.models;
export default async function(req, res) {
  const {
    query: { title }
  } = req;

  const post = await Post.findOne({
    where: {
      title
    }
  });

  res.send(post);
}
