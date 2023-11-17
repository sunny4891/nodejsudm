const express = require("express");
const app = express();
const studentsRouter = require("./students");
app.use(express.json(0));
app.use(express.static("public"));

// function mymiddleware1(req, res, next) {
//   console.log("my middleware 1");
//   next();
// }

// function mymiddleware2(req, res, next) {
//   console.log("my middleware 2");
//   next();
// }

// function mymiddleware3(req, res, next) {
//   console.log("my middleware 3");
//   next();
// }
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

app.use("/student", studentsRouter);
