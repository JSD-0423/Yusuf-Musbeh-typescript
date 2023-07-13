import { Router } from "express";
import { getAuthors, postAuthors } from "../controllers/author-controller";
import {
  handleErrors,
  postAuthorsValidationSchema,
} from "../middlewares/validationMiddleware";
import { checkSchema } from "express-validator";
const router = Router();
router.get("/authors", getAuthors);
router.post(
  "/authors",
  checkSchema(postAuthorsValidationSchema),
  handleErrors,
  postAuthors
);
export { router };
