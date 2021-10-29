/* eslint-disable no-undef */
import express, { json, urlencoded } from "express";
import indexRouter from "./routes/index.js";

const app = express();

const port = process.env.port || 5000;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/", indexRouter);

//error handler for 404 error
app.use((req, res) => {
  res.status(404).send({ error: "Not found" });
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500).send({ error: err });
});

app.listen(port, () => {
  console.log("SERVER RUNNING ON PORT ${port}");
});
export default app;
