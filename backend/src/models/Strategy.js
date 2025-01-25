import mongoose from 'mongoose';

const strategySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  performance: [{
    date: {
      type: Date,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
    roi: {
      type: Number,
      required: true
    }
  }],
  metrics: {
    cagr: {
      type: Number,
      required: true
    },
    drawdown: {
      type: Number,
      required: true
    },
    winRate: {
      type: Number,
      required: true
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Strategy', strategySchema);