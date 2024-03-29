const mongoose = require('mongoose')

const mongoose = require('mongoose')

VoteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
    default: Date.now(),
  },
})

const SolutionSchema = new mongoose.Schema({
  price: { type: Number, required: true },
  title: { type: String, required: true },
  problem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Problem',
    required: true,
  },
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  budgetDeadLine: {
    type: Date,
    default: () => Date.now() * 30 * 24 * 3600 * 1000,
  },
  earnedMoney: Number,
  votes: [VotesSchema]
})

const Solution = mongoose.model('Solution', SolutionSchema)

module.exports = Solution
