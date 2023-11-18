const { application } = require("express");
const express = require("express");
const courseRouter = require("./course");
const app = express();
const studentsRouter = require("./students");
const apiRouter = express.Router();
const morgan = require("morgan");
app.use(express.json(0));
app.use(express.static("public"));
app.use(morgan("tiny"));
app.listen(3000, () => {
  console.log("my server running on port number 3000");
});

app.get("/", (req, res) => {
  res.status(200).json({ data: "hi my name is prasenjit saha" });
});

app.use("/api", apiRouter);

apiRouter.use("/student", studentsRouter);
apiRouter.use("/course", courseRouter);

function errorHandler(err, req, res, next) {
  console.log(err);
  res.json({ err: err.message });
}

app.use(errorHandler);
