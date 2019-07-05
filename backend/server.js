import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Issue from './models/Issue';

import { dbAccessString, localAccessString } from './access/access';

const app = express();
const router = express.Router();

app.use(cors());//Middleware for using resources located outside the server
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(`${localAccessString}`, {useNewUrlParser: true});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!')
})

app.get('/', (req, res) => { 
    res.send('Hello world!')
});

//Event listener for the database open event

router.route('/issues').get((req, res) => {
    Issue.find((err, issues) => {
        if (err)
            console.log(err);
        else
            res.json(issues);
    });
})//HTTP GET for a list of issues in JSON format

router.route('/issues/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err) {
            console.log(err);
        } else {
            res.json(issue);
        }
    })
});//colon id defines an url parameter. This can be used to retrieve a specific issue.

router.route('/issues/add').post((req, res) => {
    let issue = new Issue(req.body);
    issue.save()
        .then(issue => {
            res.status(200).json({'issue': 'Added successfully'})
        }).catch(err => {
            res.status(400).send('Failed to create a new record');
        });
});

router.route('/issues/update/:id').post((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (!issue) {
            return next(new Error('Could not load document'));
        } else {
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;

            issue.save().then(issue => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

router.route('/issues/delete/:id').get((req, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if (err) {
            res.json(err);
        } else {
            res.json('Removed successfuly!');
        }
    })
})

app.use('/', router);

const port = 4000;//Port number being used
app.listen(port, () => console.log(`Express server running on port ${port}`));

