import {Router} from "express";
import {getBooks} from "../controllers/user-controller"
import {body, query, param,} from "express-validator";

const router: Router = Router();

router.get('/books', [query("name").toLowerCase()], getBooks)
export {router}
