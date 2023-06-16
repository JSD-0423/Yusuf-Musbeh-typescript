import { Router } from "express";
import { postAuthor } from "../controllers/author-controller";
const router = Router();

router.post("/authors", postAuthor);
export { router };
