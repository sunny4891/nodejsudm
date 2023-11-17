const express = require("express");
const app = express();
const studentsRouter = require("./students");
app.use(express.json(0));
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("my server running on port number 3000");
});

app.get("/", (req, res) => {
  res.status(200).json({ data: "hi my name is prasenjit saha" });
});

app.use("/student", studentsRouter);
