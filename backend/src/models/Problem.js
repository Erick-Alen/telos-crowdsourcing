const mongoose = require('mongoose')

const ProblemSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String},
  address: {
    city: String,
    uf: String,
    neighborhood: String,
  },
  imageUrl: { type: String },
  deadLine: {
    type: Date,
    default: Date.now() + 3 * 24 * 3600 * 1000,
  },
  pix: String,
  solutions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Solution',
  }]
})
const Problem = mongoose.model('Problem', ProblemSchema)

module.exports = Problem
