const mongoose = require('mongoose');

const TreatmentCenterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: String,
  phone: String,
  website: String,
  description: String,
  services: [String], // e.g., ['Detox', 'Inpatient', 'Outpatient']
  verified: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('TreatmentCenter', TreatmentCenterSchema);
