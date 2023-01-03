// import express
const express = require('express');

// initialize app
const app = express();

// controllers
const studentsController = require('./controllers/studentsController');
const namesController = require('./controllers/namesController')

// middlewares
app.use('/students', studentsController);
app.use('/names', namesController);

// route
app.get("/", (req, res) => {
    res.send("Come on Adnan lets go")
})


module.exports = app;