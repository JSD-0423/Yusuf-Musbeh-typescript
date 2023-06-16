import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../connection";

class Author extends Model {
  public id!: string;
  public name!: string;
}

Author.init(
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
  },
  { sequelize, modelName: "Author", timestamps: false }
);

export { Author };
