import { Router } from "express";
import { getBooks, postBooks } from "../controllers/user-controller";
import { body, query, param } from "express-validator";

const router: Router = Router();

router.get("/books", [query("name").toLowerCase()], getBooks);
router.post("/books", postBooks);
export { router };
