import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  assets: [{
    type: {
      type: String,
      required: true,
      enum: ['stocks', 'bonds', 'crypto', 'commodities']
    },
    value: {
      type: Number,
      required: true
    },
    allocation: {
      type: Number,
      required: true
    }
  }],
  totalValue: {
    type: Number,
    required: true
  },
  dailyPnL: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Portfolio', portfolioSchema);