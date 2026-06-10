import { Booking, Event, Payment } from '../models/index.js'

export const createBooking = async (req, res) => {
  const { eventId, quantity } = req.body
  const event = await Event.findByPk(eventId)
  if (!event) return res.status(404).json({ message: 'Event not found' })

  const totalPrice = Number(event.price) * Number(quantity)
  const payment = await Payment.create({
    provider: 'visa',
    amount: totalPrice,
    status: 'completed',
    userId: req.user.id,
    transactionId: `txn_${Date.now()}`
  })

  const booking = await Booking.create({
    userId: req.user.id,
    eventId,
    quantity,
    totalPrice,
    paymentId: payment.id,
    status: 'confirmed',
    qrCode: `QR-${Math.random().toString(36).substring(2, 10).toUpperCase()}`
  })

  res.status(201).json({ booking, payment })
}

export const getBooking = async (req, res) => {
  const booking = await Booking.findByPk(req.params.id)
  if (!booking) return res.status(404).json({ message: 'Booking not found' })
  res.json(booking)
}

export const listBookings = async (req, res) => {
  const bookings = await Booking.findAll({ where: { userId: req.user.id } })
  res.json(bookings)
}
