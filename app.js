const express = require("express");
const indexRouter = require("./routes/index");

const app = express();
require("dotenv").config();

const port = process.env.PORT;
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

//error handler for 404 error
app.use((req, res) => {
  res.status(404).send({ error: "Not found" });
});

app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500).send({ error: err });
});

app.listen(port, () => {
  console.log("SERVER RUNNING ON PORT ${port}");
});
module.exports = app;
