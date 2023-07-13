import {
  body,
  Schema,
  ValidationChain,
  validationResult,
} from "express-validator";
import { NextFunction, Response, Request } from "express";
import { Author } from "../db/models/author";
const handleErrors = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response
      .status(400)
      .json({ statusCode: 400, errors: errors.array() });
  }
  next();
};
const postBookValidationSchema: Schema = {
  name: {
    in: "body",
    notEmpty: {
      errorMessage: "name is Required",
    },
  },
  isbn: {
    in: "body",
    notEmpty: {
      errorMessage: "isbn is Required",
    },
  },
  authorId: {
    in: "body",
    notEmpty: {
      errorMessage: "Author ID is Required",
      bail: true,
    },
    custom: {
      options: async (value) => {
        const author = await Author.findByPk(value);
        if (!author) {
          throw new Error("Author does not exist with this ID");
        }
        return true;
      },
      errorMessage: "Author does not exist with this ID",
    },
  },
};

const postAuthorsValidationSchema: Schema = {
  name: {
    in: "body",
    notEmpty: {
      errorMessage: "Author name is required",
    },
  },
};

export { postBookValidationSchema, postAuthorsValidationSchema, handleErrors };
