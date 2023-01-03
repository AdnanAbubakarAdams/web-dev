const express = require('express');

const names = express.Router();

const {repeatNTimesWithSpace, capitalizeFirstLetter} = require('../utils/stringUtils');

names.get('/:name/:times', (req, res) => {
    try {
        // get name
        const name = req.params.name
        // get times
        const times = req.params.times
        // get result of repeatNTimesWithSpace
        const repeatNames = repeatNTimesWithSpace(name, times)
        //send string response of result
        res.send(repeatNames);
        
    } catch (error) {
        res.send("there was an error")
    }
})

module.exports = names;


