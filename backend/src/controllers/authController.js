import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '../models/index.js'

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  )
}

export const register = async (req, res) => {
  const { name, email, password, role } = req.body
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email and password are required' })
  }
  const existing = await User.findOne({ where: { email } })
  if (existing) {
    return res.status(409).json({ message: 'Email already registered' })
  }
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await User.create({ name, email, password: hashedPassword, role: role || 'tourist' })
  res.status(201).json({
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
    token: generateToken(user)
  })
}

export const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ where: { email } })
  if (!user || !user.password) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }
  const matched = await bcrypt.compare(password, user.password)
  if (!matched) {
    return res.status(401).json({ message: 'Invalid credentials' })
  }
  res.json({
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
    token: generateToken(user)
  })
}

export const me = async (req, res) => {
  const user = await User.findByPk(req.user.id, { attributes: { exclude: ['password'] } })
  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }
  res.json(user)
}
