import { Book } from "./models/book";
import { Author } from "./models/author";

export async function dbInit() {
  Author.hasMany(Book, {
    foreignKeyConstraint: true,
    foreignKey: "author_id",
  });
  Book.belongsTo(Author, {
    foreignKeyConstraint: true,
    foreignKey: "author_id",
  });
  await Book.sync();
  await Author.sync();
}
