const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  pros: String,
  cons: String,
  advice: String,
  encouragement: String,
  approved: { type: Boolean, default: false },
  submittedAt: { type: Date, default: Date.now }
});

const FacilitySchema = new mongoose.Schema({
  name: String,
  location: String,
  contactInfo: String,
  programs: String,
  staffInsights: String,
  logoUrl: String,
  photos: [String],
  reviews: [ReviewSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Facility', FacilitySchema);
