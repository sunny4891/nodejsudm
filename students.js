const express = require("express");
const studentsRouter = express.Router();
const middleware = require("./middlaware");
const joi = require("joi");
const jwt = require("jsonwebtoken");

let students = [
  {
    name: "prasenjit saha",
    email: "prasenjit.llspl@gmail.com",
    password: "12345678",
    type: "admin",
  },
];
studentsRouter.get("/", middleware, (req, res) => {
  res.status(200).json(students);
});

studentsRouter.get("/profile", (req, res) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    let payload = jwt.verify(token, "1234");
    let st = students.find((e) => {
      if (e.email === payload.email) {
        return true;
      } else {
        return false;
      }
    });
    if (st) {
      res.status(200).json({ data: st });
    } else {
      res.status(400).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(401).json({ error });
  }
});

studentsRouter.get("/:id", (req, res) => {
  res.status(200).json({
    data: { studentId: 1, id: req.params.id },
  });
});

studentsRouter.post("/login", (req, res) => {
  let schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(5).max(10).required(),
  });
  let result = schema.validate(req.body);
  if (result.error) {
    res.status(400).json({ error: result.error.message });
  } else {
    let email = result.value.email;
    let password = result.value.password;
    let student = students.find((e) => {
      if (e.email === email && e.password === password) {
        return true;
      } else {
        return false;
      }
    });
    if (student) {
      res.status(200).json({
        data: {
          token: jwt.sign(student, "1234"),
          data: student,
          message: "Login Successfully",
        },
      });
    } else {
      res.status(400).json({ error: "Email or Password invalid" });
    }
  }
});

// post req //
studentsRouter.post("/", (req, res) => {
  let token = req.headers.authorization.split(" ")[1];
  if (token) {
    try {
      const jwtData = jwt.verify(token, "1234");
      if (jwtData.type != "admin") {
        throw new Error();
      } else {
      }
    } catch (error) {
      res.status(404).json({ error });
    }
  } else {
    res.status(404).json({ error });
  }
  let schema = joi.object({
    name: joi.string().min(5).max(20).required(),
    email: joi.string().email().required(),
    password: joi.string().min(5).max(10).required(),
  });
  let result = schema.validate(req?.body);
  if (result?.error) {
    res.status(404).json({ error: result?.error?.message });
  } else {
    students.push(result.value);
    res.status(200).json({ data: result.value });
  }
});

// put req //

studentsRouter.put("/:id", (req, res) => {
  res.status(200).json({
    data: { id: req.params.id },
  });
});

//delete req //

studentsRouter.delete("/:id", (req, res) => {
  try {
    throw new error();
  } catch (e) {
    res.status(500).json({ message: "something went wrong" });
  }
  res.status(200).json({
    data: { id: req.params.id },
  });
});

module.exports = studentsRouter;
