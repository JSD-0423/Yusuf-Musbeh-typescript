import { DataTypes } from "sequelize";
import { sequelize } from "../connection";

const Book = sequelize.define(
  "Book",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export { Book };
