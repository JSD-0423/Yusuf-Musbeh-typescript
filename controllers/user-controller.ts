import {NextFunction, Request, Response} from "express";
import {getData} from "../utils/filesystem";
import {Book} from "../models/book";
import * as validator from "express-validator";

const getBooks = (request: Request, response: Response, next: NextFunction) => {
    let query: any = request.query.name || "";
    const books = getData()
    const filteredBooks: Book[] = books.filter((book: Book) => book.name.toLowerCase().startsWith(query));
    return response.status(200).json({statusCode: 200, books: filteredBooks});
}

export {getBooks}