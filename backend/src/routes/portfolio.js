import express from 'express';
import Portfolio from '../models/Portfolio.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get portfolio data with date range filter
router.get('/:userId', auth, async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    let query = { userId: req.params.userId };

    if (startDate && endDate) {
      query.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    const portfolio = await Portfolio.findOne(query);
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update portfolio
router.put('/:userId', auth, async (req, res) => {
  try {
    const portfolio = await Portfolio.findOneAndUpdate(
      { userId: req.params.userId },
      { ...req.body, updatedAt: Date.now() },
      { new: true, upsert: true }
    );
    res.json(portfolio);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;