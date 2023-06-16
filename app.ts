import express, { Express, NextFunction, Request, Response } from "express";
import { router as userRouter } from "./routes/user-route";
import { authenticateConnection } from "./db/connection";
import { dbInit } from "./db/dbInit";

const app: Express = express();
app.use(express.json());
app.use(userRouter);

authenticateConnection().then((e) => {
  dbInit().then((e) => {
    app.listen(3000, "localhost", () => {
      console.log("Server now is working on port 3000");
    });
  });
});
