import mongoose from 'mongoose';
import { MovieSchema, UserSchema } from '../models/movieModel';
import google from 'google-finance-data';

const Movies = mongoose.model('Movies', MovieSchema);

const User = mongoose.model('User', UserSchema);

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

export const getStockById = (req, res) => {
    google.getSymbol(req.params.stockId)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.send(err);
    })
}

export const addUserByEmail = (req, res) => {
    let newUser = new User(req.body);
    console.log('inin');
    console.log(newUser);
    newUser.save((err, user) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.json(user);
        }
    });
}

export const addToPortfolio = (req, res) => {
    console.log(req.body.email);
    console.log(req.body.stock);
    console.log(req.body.shares);
    User.findOne({email: req.body.email}, function(error, doc){
        if (error) {
            res.send(err);
        }
        if (doc.portfolio.get(req.body.stock)) {
            doc.portfolio.set(req.body.stock, Number(req.body.shares) + doc.portfolio.get(req.body.stock));
        } else {
            doc.portfolio.set(req.body.stock, Number(req.body.shares));
        }
        
        //doc.markModified('portfolio');
        doc.save();
        res.send(doc);
    })
}

