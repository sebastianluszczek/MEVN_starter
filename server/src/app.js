const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// mongoDB connection
mongoose.connect('mongodb+srv://utkow1991:utkow_1991@cluster0-ympqd.mongodb.net/mevn_starter?retryWrites=true', {
    useNewUrlParser: true
});

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    'extended': 'false'
}));
app.use(cors());

// api routes - RESTfull api
app.use('/api', require('./routes/api'));

// vue.js biuld assets for all url
app.use(express.static(__dirname + '/../dist/'));
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/../dist/index.html'));

// app listen
app.listen(process.env.PORT || 8080, () => console.log('Server started.....'));