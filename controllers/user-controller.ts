import { NextFunction, Request, Response } from "express";
import { getData } from "../utils/filesystem";
// import { Book } from "../models/book";
import * as validator from "express-validator";
import { Book } from "../db/models/book";
import { Author } from "../db/models/author";
import { where } from "sequelize";
import * as crypto from "crypto";

const getBooks = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    let query: any = request.query.name || "";
    const books = await Book.findAll();
    console.log(books);
    const filteredBooks = books.filter((book: any) =>
      book.name.toLowerCase().startsWith(query)
    );
    console.log(filteredBooks);
    return response.status(200).json({ statusCode: 200, books: filteredBooks });
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
  const book = await Book.findByPk(id);
  response.status(200).json(book);
};

const postBooks = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { name, isbn, authorId } = request.body;
  const author = await Author.findByPk(authorId);
  if (!author)
    return response
      .status(400)
      .json({ status: 400, error: "Author does not exist with this ID" });
  const book = await Book.create({
    id: crypto.randomUUID(),
    name: name,
    isbn: isbn,
    author_id: authorId,
  });
  response.json({ book });
};

export { getBooks, postBooks, getBookById };
