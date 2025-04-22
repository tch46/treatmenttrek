const express = require('express');
const router = express.Router();
const TreatmentCenter = require('../models/TreatmentCenter');

// Create a new treatment center
router.post('/', async (req, res) => {
  try {
    const newCenter = new TreatmentCenter(req.body);
    await newCenter.save();
    res.status(201).json(newCenter);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all treatment centers
router.get('/', async (req, res) => {
  try {
    const centers = await TreatmentCenter.find();
    res.status(200).json(centers);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a treatment center by ID
router.get('/:id', async (req, res) => {
  try {
    const center = await TreatmentCenter.findById(req.params.id);
    if (!center) return res.status(404).json({ message: 'Center not found' });
    res.status(200).json(center);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a treatment center by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedCenter = await TreatmentCenter.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCenter) return res.status(404).json({ message: 'Center not found' });
    res.status(200).json(updatedCenter);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a treatment center by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedCenter = await TreatmentCenter.findByIdAndDelete(req.params.id);
    if (!deletedCenter) return res.status(404).json({ message: 'Center not found' });
    res.status(200).json({ message: 'Center deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
