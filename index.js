const express = require("express");
const app = express();
app.use(express.json(0));
app.listen(3000, () => {
  console.log("my server running on port number 3000");
});

// json req//

app.get("/", (req, res) => {
  res.status(200).json({ data: "hi my name is prasenjit saha" });
});

app.get("/student", (req, res) => {
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
