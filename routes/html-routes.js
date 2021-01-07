var path = require("path");
var express = require('express');

const router = express();

// Routes
// =============================================================

// index route loads index.html
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// exercise route loads exercise.html
router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// blog route loads stats.html
router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;