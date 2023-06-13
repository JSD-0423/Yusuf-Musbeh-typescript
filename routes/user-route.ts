import { Router } from "express";
import {
  getBooks,
  postBooks,
  getBookById,
} from "../controllers/user-controller";
import { body, query, param } from "express-validator";

const router: Router = Router();

router.get("/books", [query("name").toLowerCase()], getBooks);
router.get("/books/:id", getBookById);
router.post("/books", postBooks);
export { router };
