var express = require('express');
var app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
const puppeteer = require('puppeteer');
const cors = require('cors');
app.use(cors());
mongoose.connect('mongodb://127.0.0.1:27017/fyp_backend', {

        useNewUrlParser: true,
        useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB', error);
  });

const favourites=require('./favourites.js');
const login=require('./login.js');
const register=require('./register.js');
const recommendation=require('./recommendation.js')

app.use('/favourite',favourites);
app.use('/login',login);
app.use('/register',register)
app.use('/recommendation',recommendation)
app.listen(8080);

