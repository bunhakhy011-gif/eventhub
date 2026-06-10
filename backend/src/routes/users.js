import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { getProfile, updateProfile, bookingHistory, notifications } from '../controllers/userController.js'

const router = express.Router()
router.use(protect)
router.get('/me', getProfile)
router.put('/me', updateProfile)
router.get('/bookings', bookingHistory)
router.get('/notifications', notifications)

export default router
