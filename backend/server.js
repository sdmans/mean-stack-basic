import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
// app.get('/', (req, res) => { res.send('Hello World') });
//Sends 'Hello world as a response for testing to see if the server request works

const router = express.Router();

app.use(cors());//Middleware for using resources located outside the server

// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json);

// mongoose.connect('');

// const connection = mongoose.connection;

// connection.once('open', () => {
//     console.log('MongoDB database connection established successfully!')
// })
//Event listener for the database open event

app.use('/', router);

const port = 4000;//Port number being used
app.listen(port, () => console.log(`Express server running on port ${port}`));

