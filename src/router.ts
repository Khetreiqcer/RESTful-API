import {Router, Request, Response} from "express";
import { createMovie, getAllMovies, getMoviesById, removeMovie, searchMovie, updateMovie } from "./controllers/movieController";
import { validate } from "./middleware/handleValidation";
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router();

export default router.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Hello World")
})
.post("/movie",movieCreateValidation(), validate, createMovie)
.get("/movie/:id", getMoviesById)
.get("/movie", getAllMovies)
.delete("/movie/:id", removeMovie)
.patch("/movie/:id", movieCreateValidation(), validate, updateMovie)
.get("/movie/search", searchMovie)



