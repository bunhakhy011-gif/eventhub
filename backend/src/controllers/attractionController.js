import { Attraction } from '../models/index.js'
import { Op } from 'sequelize'

export const listAttractions = async (req, res) => {
  const where = {}
  if (req.query.city) {
    where.city = { [Op.iLike]: `%${req.query.city}%` }
  }
  const attractions = await Attraction.findAll({ where })
  res.json(attractions)
}

export const getAttraction = async (req, res) => {
  const attraction = await Attraction.findByPk(req.params.id)
  if (!attraction) return res.status(404).json({ message: 'Attraction not found' })
  res.json(attraction)
}
