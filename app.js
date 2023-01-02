// import express
const express = require('express');

// initialize app
const app = express();

// route
app.get("/", (req, res) => {
    res.send("Come on Adnan lets go")
})


module.exports = app;