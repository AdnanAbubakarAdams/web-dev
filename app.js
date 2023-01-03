// import express
const express = require('express');

// initialize app
const app = express();

// controllers
const studentsController = require('./controllers/studentsController');

// middlewares
app.use('/students', studentsController);

// route
app.get("/", (req, res) => {
    res.send("Come on Adnan lets go")
})


module.exports = app;