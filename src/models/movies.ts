import { Schema, model } from "mongoose";

const movieSchema = new Schema(
    {
    title: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    
    description: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    actors: {
        type: [String],
        required: true,
    },
    poster: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    }

);

export const MovieModel = model("Movie", movieSchema);

export default MovieModel;
