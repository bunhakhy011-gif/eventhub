import express from 'express'
import { listEvents, getEvent, createEvent, updateEvent } from '../controllers/eventController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()
router.get('/', listEvents)
router.get('/:id', getEvent)
router.post('/', protect, createEvent)
router.put('/:id', protect, updateEvent)

export default router
