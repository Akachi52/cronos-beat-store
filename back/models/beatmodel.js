const mongoose = require('mongoose');

const beatModSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  index: {
    type: Number
  },
  img: {
    type: String
  }, 
  author: {
    type: String
  },
  lenght: {
    type: String
  },
  tempo: {
    type: String
  },
  audioSrc: {
    type: String,
    required: true
  }

},{timestamps: true});

const beatMod = mongoose.model('beatMod', beatModSchema);

module.exports = beatMod;