import { getMovie, addNewMovie, getMovieById } from '../controllers/apiController'
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
    .put((req, res) => {
        res.send(`PUT /movieId request successful!`)
    })
    .delete((req, res) => {
        res.send(`DELETE /movieId request successful!`)
    });
}

export default apis;



