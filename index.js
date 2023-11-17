const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("my server running on port number 3000");
});

app.get("/", (req, res) => {
  res.status(200).send({ data: "hi my name is prasenjit saha" });
});

app.get("/student", (req, res) => {
  res.status(200).send({ data: { studentId: 1, name: "prasenjit saha" } });
});
