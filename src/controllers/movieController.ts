import { Request, Response } from "express";
import { MovieModel } from "../models/movies";
import Logger from "../../config /logger";

export async function createMovie(req: Request, res: Response) {
   try {
      const data = req.body;
      const movie = await MovieModel.create(data);
      return res.status(201).json(movie);
   } catch (error) {
      Logger.error(`Error creating movie: ${error}`);
      return res.status(500).json(error);
   }
}

export async function getMoviesById(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);
        if(!movie){
            return res.status(404).json({error: "Filme não encontrado"});
        }
        return res.status(200).json(movie);
    } catch (error) {
        Logger.error(`Error getting movie by id: ${error}`);
        return res.status(500).json(error);
    }
}

export async function getAllMovies(req: Request, res: Response) {
    try {
        const movies = await MovieModel.find();
        return res.status(200).json(movies);
    } catch (error) {
        Logger.error(`Error getting all movies: ${error}`);
        return res.status(500).json(error);
    }
}

export async function removeMovie(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findByIdAndDelete(id);
        if(!movie){
            return res.status(404).json({error: "Filme não encontrado"});
        }
        return res.status(200).json({msg: "Filme removido com sucesso"});
    } catch (error) {
        Logger.error(`Error removing movie: ${error}`);
        return res.status(500).json(error);
    }
}

export async function updateMovie(req: Request, res: Response) {
    try {
        const id = req.params.id;
        const data = req.body;
        const movie = await MovieModel.findByIdAndUpdate(id, data, {new: true});
        return res.status(200).json(movie);
    } catch (error) {
        Logger.error(`Error updating movie: ${error}`);
        return res.status(500).json(error);
    }
}

export async function searchMovie(req: Request, res: Response) {
    try {
        const {q} = req.query;
        const movies = await MovieModel.find({
            title: {$regex: q, $options: "i"}
        });
        return res.status(200).json(movies);
    } catch (error) {
        Logger.error(`Error searching movie: ${error}`);
        return res.status(500).json(error);
    }
}
