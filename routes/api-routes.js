const express = require('express');
const router = express.Router();

const db = require('../models');

// Routes
// =============================================================

// Router for fetching all workouts 
router.get("/workouts", (req, res) => {
    db.Workout.find({})
        .then(response => res.json(response))
        .catch(err => res.sendStatus(404).json(err));
});

// Router for posting new workout
router.post("/workouts", (req, res) => {
    db.Workout.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.sendStatus(404).json(err));
});

// Router for fetching all workouts
router.get("/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(response => res.json(response))
        .catch(err => res.sendStatus(404).json(err));
});

// Router for adding new exercise to a specific workout
router.put("/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(req.params.id, {
        $push: { exercises: req.body }
    })
        .then(response => res.json(response))
        .catch(err => res.sendStatus(404).json(err));
});

module.exports = router;