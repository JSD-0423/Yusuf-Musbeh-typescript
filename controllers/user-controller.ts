import { NextFunction, Request, Response } from "express";
import { getData } from "../utils/filesystem";
// import { Book } from "../models/book";
import * as validator from "express-validator";

const getBooks = (request: Request, response: Response, next: NextFunction) => {
  try {
    let query: any = request.query.name || "";
    const books = getData();
    const filteredBooks = books.filter((book: any) =>
      book.name.toLowerCase().startsWith(query)
    );
    return response.status(200).json({ statusCode: 200, books: filteredBooks });
  } catch (e) {
    console.error(e);
    response
      .status(500)
      .json({ statusCode: 500, error: "Internal server error" });
  }
};

export { getBooks };
