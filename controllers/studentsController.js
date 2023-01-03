const express = require("express");

const controller = express.Router();

const studentsData = require("../studentData.json");

// routes
controller.get("/", (req, res) => {
  res.json(studentsData);
});

// single student
controller.get("/:id", (req, res) => {
  try {
    const studentId = req.params.id;

    if (!/[0-9]/.test(studentId)) {
      res.send("student id must tbe a number");
      return;
    }

    const singleStudent = studentsData.students.find((student) => {
      return student.id === studentId;
    });
    console.log(singleStudent);
    if (singleStudent) {
      res.json(singleStudent);
    } else {
      res.send("Student Not found");
    }
  } catch (error) {
    res.status(500).send("An error occured")
  }

});

module.exports = controller;
