const apis = (app) => {
    // defines '/movie' as a RESTful API endpoint, which supports GET, POST on this endpoint.
    app.route('/movie')
    .get((req, res) => {
        res.send("/movie GET request received");
    })
    .post((req, res) => {
        res.send(`/movie POST request received: Request type is ${req.method}`);
    });
}

export default apis;