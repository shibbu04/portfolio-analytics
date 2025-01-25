import express from 'express';
import Strategy from '../models/Strategy.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get all strategies with filters
router.get('/', auth, async (req, res) => {
  try {
    const { startDate, endDate, sortBy } = req.query;
    let query = {};

    if (startDate && endDate) {
      query.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    let strategies = await Strategy.find(query);

    if (sortBy) {
      strategies = strategies.sort((a, b) => {
        if (sortBy === 'cagr') return b.metrics.cagr - a.metrics.cagr;
        if (sortBy === 'winRate') return b.metrics.winRate - a.metrics.winRate;
        return 0;
      });
    }

    res.json(strategies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get strategy by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const strategy = await Strategy.findById(req.params.id);
    if (!strategy) {
      return res.status(404).json({ message: 'Strategy not found' });
    }
    res.json(strategy);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;