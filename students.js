const express = require("express");
const studentsRouter = express.Router();

studentsRouter.get("/", (req, res) => {
  res.status(200).json({
    data: {
      studentId: 1,
      sortBy: req.query.sortBy,
      limit: req.query.limit,
    },
  });
});

studentsRouter.get("/:id", (req, res) => {
  res.status(200).json({
    data: { studentId: 1, id: req.params.id },
  });
});

// post req //
studentsRouter.post("/", (req, res) => {
  res.status(200).json({ data: { studentId: 1, name: req?.body?.name } });
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
