import mongoose from 'mongoose';
import { MovieSchema } from '../models/movieModel';

const Movies = mongoose.model('Movies', MovieSchema);

export const getMovie = (req, res) => {
    Movies.find({}, (err, movies) => {
        if (err) {
            res.send(err)
        } else {
            res.json(movies)
        }
    })
}

export const addNewMovie = (req, res) => {
    let newMovie = new Movies(req.body)
    newMovie.save((err, movie) => {
        if (err) {
            res.send(err);
        } else {
            res.json(movie);
        }
    });
}

export const getMovieById = (req, res) => {
    Movies.findById(req.params.movieId, (err, movie) => {
        if (err) {
            res.send(err);
        } else {
            res.json(movie);
        }
    })
}

export const updateMovie = (req, res) => {
    Movies.findOneAndUpdate({_id: req.params.movieId}, req.body, { new: true, useFindAndModify: false}, (err, movie) => {
        if (err) {
            res.send(err);
        } else {
            res.json(movie);
        }
    })
}

export const deleteMovie = (req, res) => {
    Movies.remove({_id: req.params.movieId}, (err, movie) => {
        if (err) {
            res.send(err);
        } else {
            res.json({message: 'Movie has been removed'});
        }
    })
}