import { Book } from "./models/book";
import { Author } from "./models/author";

export function dbInit() {
  Author.hasMany(Book, {
    foreignKeyConstraint: true,
    foreignKey: "author_id",
  });
  Book.belongsTo(Author, {
    foreignKeyConstraint: true,
    foreignKey: "author_id",
  });
  Book.sync();
  Author.sync();
}
