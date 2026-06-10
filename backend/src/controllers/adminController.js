import { User, Event, Booking, Payment, Review } from '../models/index.js'

export const getDashboard = async (req, res) => {
  const users = await User.count()
  const events = await Event.count()
  const bookings = await Booking.count()
  const revenue = await Payment.sum('amount')
  const reviews = await Review.count()
  res.json({ users, events, bookings, revenue, reviews })
}

export const listUsers = async (req, res) => {
  const users = await User.findAll({ attributes: ['id', 'name', 'email', 'role', 'createdAt'] })
  res.json(users)
}

export const listReports = async (req, res) => {
  const events = await Event.findAll({ order: [['createdAt', 'DESC']], limit: 20 })
  res.json({ events })
}
