const express = require('express');
const ejs = require('ejs');
const path = require('path');
const Photo = require('./models/Photo');
const mongoose = require('mongoose');

const app = express();

//Database Connection
mongoose.connect('mongodb://localhost/pcat-test-db');

//Template Engine
app.set('view engine', 'ejs');

//Middleware
app.use(express.static('public'));
app.use(express.json());//verileri json formatında almak için
app.use(express.urlencoded({ extended: true }));//girilen verileri almak için

//Routes
app.get('/', async (req, res) => {
  const photos = await Photo.find({})
  res.render('index', { photos });
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

app.post('/photos', async (req, res) => {
  await Photo.create(req.body);
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
