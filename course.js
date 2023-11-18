const express = require("express");
const courseRouter = express.Router();
const Joi = require("joi");
const courses = [];

courseRouter.get("/", (req, res) => {
  res.status(200).json({ message: courses });
});

courseRouter.post("/", (req, res) => {
  let tempCourse = req.body;
  let schema = Joi.object({
    course_name: Joi.string().min(5).max(20).required(),
    length: Joi.number().min(1).max(10).required(),
    author_name: Joi.string().min(2).max(20).required(),
    author_email: Joi.string().email().required(),
  });
  let result = schema.validate(tempCourse);
  if (result.error) {
    res.status(400).json({ message: result.error.message });
  } else {
    result.value.id = courses?.length + 1;
    courses.push(result.value);
    res.status(200).json({ message: result.value });
  }
});

courseRouter.put("/:id", (req, res) => {
  let id = req.params.id;
  let name = req.body.name;
  let index = courses.findIndex((e) => {
    if (e.id === parseInt(id)) {
      return true;
    }
  });
  console.log(index);

  if (index > -1) {
    let course = courses[index];
    console.log(course);
    course.name = name;
    res.status(200).json(course);
  } else {
    res.status(404).json({ error: "Course Not Found" });
  }
});

courseRouter.delete("/:id", (req, res) => {
  let id = req.params.id;
  let index = courses.findIndex((e) => {
    if (e.id == parseInt(id)) return true;
  });
  if (index > -1) {
    courses.splice(index, 1);
    res.status(200).json(courses);
  } else {
    res.status(404).json({ error: "Course not found" });
  }
});

module.exports = courseRouter;
