import express from 'express'
import { listAttractions, getAttraction } from '../controllers/attractionController.js'

const router = express.Router()
router.get('/', listAttractions)
router.get('/:id', getAttraction)

export default router
