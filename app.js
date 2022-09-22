// modules
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

// use port
const port = process.env.PORT || 8080;
// build app
const app = express();

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes'));

// init DB
mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});