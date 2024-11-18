const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

//Template Engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.get('/video-page', (req, res) => {
  res.render('video-page');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
