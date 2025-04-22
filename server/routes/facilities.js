const express = require('express');
const router = express.Router();
const Facility = require('../models/facility');

// Get all facilities
router.get('/', async (req, res) => {
  try {
    const facilities = await Facility.find();
    res.json(facilities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new facility
router.post('/', async (req, res) => {
  try {
    const newFacility = new Facility(req.body);
    const saved = await newFacility.save();
    res.json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
