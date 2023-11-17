const express = require("express");
const app = express();
app.use(express.json(0));
app.use(express.static("public"));

function mymiddleware1(req, res, next) {
  console.log("my middleware 1");
  next();
}

function mymiddleware2(req, res, next) {
  console.log("my middleware 2");
  next();
}

function mymiddleware3(req, res, next) {
  console.log("my middleware 3");
  next();
}
// app.use(mymiddleware1);
// app.use(mymiddleware2);
// app.use(mymiddleware3);

app.listen(3000, () => {
  console.log("my server running on port number 3000");
});

// json req//

app.get("/", (req, res) => {
  res.status(200).json({ data: "hi my name is prasenjit saha" });
});

app.get("/student", mymiddleware1, (req, res) => {
  res.status(200).json({
    data: { studentId: 1, sortBy: req.query.sortBy, limit: req.query.limit },
  });
});

app.get("/student/:id", (req, res) => {
  res.status(200).json({
    data: { studentId: 1, id: req.params.id },
  });
});

// post req //
app.post("/student", (req, res) => {
  res.status(200).json({ data: { studentId: 1, name: req?.body?.name } });
});

// put req //

app.put("/student/:id", (req, res) => {
  res.status(200).json({
    data: { id: req.params.id },
  });
});

//delete req //

app.delete("/student/:id", (req, res) => {
  try {
    throw new error();
  } catch (e) {
    res.status(500).json({ message: "something went wrong" });
  }
  res.status(200).json({
    data: { id: req.params.id },
  });
});
