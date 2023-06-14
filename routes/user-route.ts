import { Router } from "express";
import {
  getBooks,
  postBooks,
  getBookById,
  putBooks,
  deleteBooks,
} from "../controllers/user-controller";
import { body } from "express-validator";
const router: Router = Router();
router.get("/books", getBooks);
router.get("/books/:id", getBookById);
router.post(
  "/books",
  [
    body("name").notEmpty().withMessage("Name is Required"),
    body("isbn").notEmpty().withMessage("isbn is required"),
  ],
  postBooks
);
router.put("/books/:id", putBooks);
router.delete("/books/:id", deleteBooks);
export { router };
