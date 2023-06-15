import { Router } from "express";
import {
  getBooks,
  postBooks,
  getBookById,
  putBooks,
  deleteBooks,
} from "../controllers/user-controller";
import { body, checkSchema } from "express-validator";
import {
  handleErrors,
  postBookValidationSchema,
} from "../middlewares/validationMiddleware";
import Joi from "joi";
const router: Router = Router();
router.get("/books", getBooks);
router.get("/books/:id", getBookById);
router.post(
  "/books",
  checkSchema(postBookValidationSchema),
  handleErrors,
  postBooks
);
router.put("/books/:id", putBooks);
router.delete("/books/:id", deleteBooks);
export { router };
