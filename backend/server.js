import express from 'express';

const app = express();
app.get('/', (req, res) => { res.send('Hello World') });

const port = 4000;//Port number being used
app.listen(port, () => console.log(`Express server running on port ${port}`));