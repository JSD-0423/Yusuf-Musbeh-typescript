import express, {Express, NextFunction, Request, Response} from "express";


const app: Express = express();
app.get("/", (request: Request, response: Response, next: NextFunction) => {
    console.log("Hello world");
    response.send("Ending response");
})

app.listen(3000)