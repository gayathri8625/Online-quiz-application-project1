// routes/bookRoutes.js
const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

// Public route to view all reviews for a book
router.get('/:bookId/reviews', (req, res) => {
    // Logic to fetch reviews from DB
    res.status(200).json({ bookId: req.params.bookId, reviews: [] });
});

// Protected route to post a new review (requires login)
router.post('/:bookId/reviews', authenticateToken, (req, res) => {
    // req.user contains the authenticated user's info
    const { rating, comment } = req.body;
    const { userId } = req.user;
    // Logic to save review to DB linked to bookId and userId
    res.status(201).json({ message: 'Review added successfully', userId, rating });
});

module.exports = router;
