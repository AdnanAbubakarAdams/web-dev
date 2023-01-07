// import express
const express = require('express');

// initialize app
const app = express();

// utils
const {orderedWordCounter, consecutiveVowels} = require(`./utils/Functions`)

// controllers
const studentsController = require('./controllers/studentsController');
const namesController = require('./controllers/namesController')

// middlewares
app.use('/students', studentsController);
app.use('/names', namesController);

// route
// app.get("/", (req, res) => {
//     res.send("Come on Adnan lets go")
// })

app.get("/", (req, res) => {
    res.send(
        {greeting: "Hello Word!", 
        source: ["Mason", "Derick", "Adnan"]}
        )
})

app.get("/add", (req, res) => {
    res.send(
        "add your numbers in the URL"
    )
})

app.get("/add/:num1/:num2", (req,res) =>{
    
    const {num1, num2} = req.params;
    let total = Number(num1) + Number(num2)

    //responses sent must be in a string format
    res.send(`${total}`)
})

app.get("/consecutiveVowels/:word", (req, res) => {
    let {word} = req.params;
    res.send(String(consecutiveVowels(word)))
})

app.get("/ordedCount/:text", (req, res) => {
  let {text} = req.params;
  res.send(orderedWordCounter(text));
})


module.exports = app;