import { Op } from 'sequelize'
import { Event, Category, Organizer, Review } from '../models/index.js'

export const listEvents = async (req, res) => {
  const { city, location, category, date, search, price, free, language } = req.query
  const dialect = Event.sequelize?.getDialect ? Event.sequelize.getDialect() : 'sqlite'
  const searchOperator = dialect === 'postgres' ? Op.iLike : Op.like

  const filters = { status: 'published' }
  if (city) filters.city = city
  if (location) filters.city = location
  if (free === 'true') filters.price = 0
  if (price === 'paid') filters.price = { [Op.gt]: 0 }
  if (date) filters.startDate = { [Op.gte]: new Date(date) }

  const searchConditions = []
  if (search) {
    searchConditions.push(
      { title: { [searchOperator]: `%${search}%` } },
      { location: { [searchOperator]: `%${search}%` } },
      { city: { [searchOperator]: `%${search}%` } }
    )
  }

  const events = await Event.findAll({
    where: {
      ...filters,
      ...(searchConditions.length ? { [Op.or]: searchConditions } : {})
    },
    include: [
      { model: Category, attributes: ['name'], where: category ? { name: category } : undefined },
      { model: Organizer, attributes: ['name', 'description'] }
    ],
    order: [['startDate', 'ASC']]
  })
  res.json(events)
}

export const getEvent = async (req, res) => {
  const event = await Event.findByPk(req.params.id, {
    include: [
      { model: Category, attributes: ['name'] },
      { model: Organizer, attributes: ['name', 'description'] },
      { model: Review, attributes: ['rating', 'comment', 'photos'] }
    ]
  })
  if (!event) {
    return res.status(404).json({ message: 'Event not found' })
  }
  res.json(event)
}

export const createEvent = async (req, res) => {
  const data = req.body
  const event = await Event.create({ ...data, organizerId: req.user.id })
  res.status(201).json(event)
}

export const updateEvent = async (req, res) => {
  const event = await Event.findByPk(req.params.id)
  if (!event) return res.status(404).json({ message: 'Event not found' })
  await event.update(req.body)
  res.json(event)
}
