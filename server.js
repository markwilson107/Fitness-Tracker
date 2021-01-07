// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Port
const PORT = process.env.PORT || 3000;

// Routes
const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes');

// App
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Routes
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// Server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});