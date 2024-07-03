require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const notesRouter = require("./controller/notes");
const logger = require("./utils/logger");
const config = require("./utils/config");
const middleware = require("./utils/middleware");
const mongoose = require("mongoose");
app.use(express.json());

mongoose.set("strictQuery", false);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });

app.use(middleware.errorHandler);
app.use(middleware.requestLogger);
app.use(cors());
app.use(express.static("dist"));
app.use("/api/notes", notesRouter);

module.exports = app;
