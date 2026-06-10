import { User, Booking, Favorite, Notification } from '../models/index.js'

export const getProfile = async (req, res) => {
  const user = await User.findByPk(req.user.id, {
    attributes: { exclude: ['password'] }
  })
  if (!user) return res.status(404).json({ message: 'User not found' })
  res.json(user)
}

export const updateProfile = async (req, res) => {
  const user = await User.findByPk(req.user.id)
  if (!user) return res.status(404).json({ message: 'User not found' })
  await user.update(req.body)
  res.json({ message: 'Profile updated', user: { id: user.id, name: user.name, email: user.email, role: user.role } })
}

export const bookingHistory = async (req, res) => {
  const bookings = await Booking.findAll({ where: { userId: req.user.id } })
  res.json(bookings)
}

export const notifications = async (req, res) => {
  const notifications = await Notification.findAll({ where: { userId: req.user.id }, order: [['createdAt', 'DESC']] })
  res.json(notifications)
}
