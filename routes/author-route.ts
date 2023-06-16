import { Router } from "express";
import { postAuthors } from "../controllers/author-controller";
import {
  handleErrors,
  postAuthorsValidationSchema,
} from "../middlewares/validationMiddleware";
import { checkSchema } from "express-validator";
const router = Router();

router.post(
  "/authors",
  checkSchema(postAuthorsValidationSchema),
  handleErrors,
  postAuthors
);
export { router };
