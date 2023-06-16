import { NextFunction, Request, Response } from "express";
import { Author } from "../db/models/author";
import { Book } from "../db/models/book";
import * as crypto from "crypto";

const getAuthors = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const authors = await Author.findAll({
      include: [{ model: Book }],
      attributes: ["name"],
    });
    response.status(200).json({ statusCode: 200, authors: authors });
  } catch (e) {
    console.error(e);
    response
      .status(500)
      .json({ statusCode: 500, errors: ["Internal server error"] });
  }
};
const postAuthors = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { name } = request.body;
  try {
    const id: string = crypto.randomUUID();
    const author: Author = await Author.create({ id: id, name: name });
    response.status(200).json({
      statusCode: 200,
      message: "author created successfully",
      author: author,
    });
  } catch (e) {
    console.error(e);
    response
      .status(500)
      .json({ statusCode: 500, errors: ["Internal server error"] });
  }
};

export { postAuthors, getAuthors };
