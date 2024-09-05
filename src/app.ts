require("dotenv").config();
import express from "express";
import config from "../config /default";
import router from "./router";
import connectToDb from "../config /db";
import Logger from "../config /logger";
import morganMiddleware from "./middleware/morganMiddleware";


const app = express();
app.use(express.json());



app.use(morganMiddleware);
app.use("/api/", router);


const port = config.port;

app.listen(port, async () =>{
    await connectToDb();
    Logger.info(`Server is running on port ${port}`);
});