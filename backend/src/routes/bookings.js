import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import { createBooking, getBooking, listBookings } from '../controllers/bookingController.js'

const router = express.Router()
router.use(protect)
router.post('/', createBooking)
router.get('/', listBookings)
router.get('/:id', getBooking)

export default router
