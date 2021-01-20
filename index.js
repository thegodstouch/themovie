// entry point for the server
import express from 'express';
import apis from './src/apis/api';

const app = express();

const PORT = 4000;

apis(app);

// I accept get request at endpoint '/'
app.get('/', (req, res) => {
    res.send(`Node and express server is running at port ${PORT}`);
})

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});
