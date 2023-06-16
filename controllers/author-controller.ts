import { NextFunction, Request, Response } from "express";
import { Author } from "../db/models/author";
import * as crypto from "crypto";

const postAuthor = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { name } = request.body;
  const id: string = crypto.randomUUID();
  const author: Author = await Author.create({ id: id, name: name });
  response.status(200).json({ statusCode: 200, author: author });
};

export { postAuthor };
