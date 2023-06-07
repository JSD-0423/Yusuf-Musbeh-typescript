import express, { Express, NextFunction, Request, Response } from "express";
import { router as userRouter } from "./routes/user-route";

const app: Express = express();
app.use(userRouter);

app.listen(3000);
