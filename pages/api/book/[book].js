import { sequelize as db } from "../../../models";
const { Book, Content } = db.models;
export default async function(req, res) {
  const {
    query: { book: name }
  } = req;

  const book = await Book.findOne({
    where: {
      name
    },
    include: [{ model: Content }]
  });

  res.send(book);
}
