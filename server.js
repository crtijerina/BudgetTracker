const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

let PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  'mongodb+srv://Chris:12345%21%40%23%24%25@cluster0.7brun.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' || 3000 || "mongodb://localhost/BudgetTracker", 
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes 
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});