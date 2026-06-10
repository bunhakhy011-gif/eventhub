import { Review, Event } from '../models/index.js'

export const listReviews = async (req, res) => {
  const reviews = await Review.findAll({ where: { eventId: req.query.eventId } })
  res.json(reviews)
}

export const createReview = async (req, res) => {
  const { eventId, rating, comment, photos } = req.body
  const event = await Event.findByPk(eventId)
  if (!event) return res.status(404).json({ message: 'Event not found' })
  const review = await Review.create({ userId: req.user.id, eventId, rating, comment, photos })
  res.status(201).json(review)
}
