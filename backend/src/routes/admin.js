import express from 'express'
import { protect, adminOnly } from '../middleware/authMiddleware.js'
import { getDashboard, listUsers, listReports } from '../controllers/adminController.js'

const router = express.Router()
router.use(protect)
router.use(adminOnly)
router.get('/dashboard', getDashboard)
router.get('/users', listUsers)
router.get('/reports', listReports)

export default router
