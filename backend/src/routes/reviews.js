import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { listReviews, createReview } from '../controllers/reviewController.js'

const router = express.Router()
router.get('/', listReviews)
router.post('/', protect, createReview)

export default router
