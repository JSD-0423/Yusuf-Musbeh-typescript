import { NextFunction, Request, Response } from "express";
import { getData } from "../utils/filesystem";
// import { Book } from "../models/book";
import * as validator from "express-validator";
import { Book } from "../db/models/book";
import { Author } from "../db/models/author";
import { where } from "sequelize";
import * as crypto from "crypto";
import { body } from "express-validator";

const getBooks = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const books = await Book.findAll();
    return response.status(200).json({ statusCode: 200, books: books });
  } catch (e) {
    console.error(e);
    response
      .status(500)
      .json({ statusCode: 500, error: "Internal server error" });
  }
};
const getBookById = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const id: string = request.params.id;
  try {
    const book = await Book.findByPk(id);
    if (!book)
      return response.status(400).json({
        statusCode: 400,
        errors: ["Book does not exist with this ID"],
      });
    response.status(200).json(book);
  } catch (e) {
    console.error(e);
    response
      .status(500)
      .json({ statusCode: 500, errors: ["Internal server error"] });
  }
};

const putBooks = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const id = request.params.id;
  const { name, isbn } = request.body;

  try {
    let book = await Book.findByPk(id);
    if (!book)
      return response.status(400).json({
        statusCode: 400,
        errors: ["Book does not exist with this ID"],
      });

    book.name = name || book.name;
    book.isbn = isbn || book.isbn;
    await book.save();
    return response.status(200).json({
      statusCode: 200,
      message: "Book Updated Successfully",
      book: book,
    });
  } catch (e) {
    console.error(e);
    response
      .status(500)
      .json({ statusCode: 500, errors: ["Internal server error"] });
  }
};

const postBooks = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { name, isbn, authorId } = request.body;
  try {
    const book = await Book.create({
      id: crypto.randomUUID(),
      name: name,
      isbn: isbn,
      author_id: authorId,
    });
    response.json({ book });
  } catch (e) {
    console.error(e);
    response
      .status(500)
      .json({ statusCode: 500, errors: ["Internal server error"] });
  }
};

const deleteBooks = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const id = request.params.id;
  try {
    const book = await Book.findByPk(id);
    if (!book)
      return response
        .status(400)
        .json({
          statusCode: 400,
          errors: ["Book does not exist with this ID"],
        });
    const result = await book.destroy();
    console.log(result);
    response
      .status(200)
      .json({ statusCode: 200, message: "Book deleted Successfully" });
  } catch (e) {
    console.error(e);
    response
      .status(500)
      .json({ statusCode: 500, errors: ["Internal server error"] });
  }
};
export { getBooks, postBooks, getBookById, putBooks, deleteBooks };
