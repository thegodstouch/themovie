// entry point for the server
import express from 'express';
import apis from './src/apis/api';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();

const PORT = 4000;

// Set up connection with MongoDB Server
// Make sure we wait for the completion of DB connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/MOVIEdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// bodyparser setup - to parse incoming requests and make sure it can be read by our API
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

apis(app);

// I accept get request at endpoint '/'
app.get('/', (req, res) => {
    res.send(`Node and express server is running at port ${PORT}`);
})

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});
