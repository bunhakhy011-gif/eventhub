import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import 'express-async-errors'
import authRoutes from './routes/auth.js'
import eventRoutes from './routes/events.js'
import userRoutes from './routes/users.js'
import bookingRoutes from './routes/bookings.js'
import reviewRoutes from './routes/reviews.js'
import attractionRoutes from './routes/attractions.js'
import adminRoutes from './routes/admin.js'
import { errorHandler } from './middleware/errorMiddleware.js'

const app = express()

app.use(helmet())
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/events', eventRoutes)
app.use('/api/users', userRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/reviews', reviewRoutes)
app.use('/api/attractions', attractionRoutes)
app.use('/api/admin', adminRoutes)

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', service: 'CamEvent Explorer API' })
})

app.use(errorHandler)

export default app
