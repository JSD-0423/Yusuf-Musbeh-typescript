import {DataTypes, Model} from "sequelize";
import { sequelize } from "../connection";

interface BookAttributes{
    name:string,
    isbn:string
}



//
// const Book = sequelize.define(
//   "Book",
//   {
//     id: {
//       type: DataTypes.STRING,
//       primaryKey: true,
//       allowNull: false,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     isbn: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     author_id: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   { timestamps: false }
// );

class Book extends Model{
    public id!:string;
    public name!:string;
    public isbn!:string;
}
Book.init({
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
},{sequelize,modelName:"Book",timestamps:false})


export { Book };
