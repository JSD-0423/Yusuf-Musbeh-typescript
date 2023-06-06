import {NextFunction, Request, Response} from "express";
import {getData} from "../utils/filesystem";
import {Book} from "../models/book";
import * as validator from "express-validator";

const getBooks = (request: Request, response: Response, next: NextFunction) => {
    let query: any = "";
    const errors = validator.validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({
            error: {
                code: 422,
                message: errors.array()[0].msg,
            },
        });
    }
    if (request.query.name) query = request.query.name;
    const books = getData()
    const filteredBooks: Book[] = books.filter((book: Book) => book.name.toLowerCase().startsWith(query));
    return response.status(200).json({statusCode: 200, books: filteredBooks});
}

export {getBooks}