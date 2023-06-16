import { Book } from "./models/book";
import { Author } from "./models/author";
import { sequelize } from "./connection";

export async function dbInit() {
  await sequelize.sync({ alter: true });
  Author.hasMany(Book, {
    foreignKeyConstraint: true,
    foreignKey: "author_id",
  });
  Book.belongsTo(Author, {
    foreignKeyConstraint: true,
    foreignKey: "author_id",
  });
}
