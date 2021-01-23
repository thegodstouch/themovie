import { getMovie, addNewMovie, getMovieById, updateMovie, deleteMovie } from '../controllers/apiController'
const apis = (app) => {
    // defines '/movie' as a RESTful API endpoint, which supports GET, POST on this endpoint.
    app.route('/movie') 
    .get((req, res, next) => {
        // middleware
        console.log(`Request is from ${req.originalUrl}`)
        console.log(`Request type ${req.method}`)
        next();
    }, getMovie)
    .post(addNewMovie);

    app.route('/movie/:movieId')
    .get(getMovieById)
    .put(updateMovie)
    .delete(deleteMovie);
}

export default apis;



