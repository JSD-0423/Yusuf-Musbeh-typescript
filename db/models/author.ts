import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../connection";

const Author = sequelize.define("Author", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export { Author };
