import dotenv from 'dotenv'
dotenv.config()
import bcrypt from 'bcryptjs'
import { sequelize, User, Organizer, Category, Event, Attraction, Hotel, Restaurant } from '../models/index.js'

const seed = async () => {
  await sequelize.sync({ force: true })

  const password = await bcrypt.hash('Welcome123', 10)
  const admin = await User.create({ name: 'Admin', email: 'admin@camevent.com', password, role: 'admin' })
  const user = await User.create({ name: 'Sopheap', email: 'sopheap@camevent.com', password, role: 'tourist' })
  const organizer = await User.create({ name: 'Angkor Events', email: 'organizer@camevent.com', password, role: 'organizer' })
  await Organizer.create({ id: organizer.id, name: 'Angkor Events', description: 'Expert event producer for cultural and entertainment experiences', phone: '+85512345678', website: 'https://angkor-events.kh' })

  const categories = await Promise.all([
    Category.create({ name: 'Festival' }),
    Category.create({ name: 'Concert' }),
    Category.create({ name: 'Sports' }),
    Category.create({ name: 'Food & Drink' }),
    Category.create({ name: 'Cultural' })
  ])

  await Promise.all([
    Event.create({
      title: 'Phnom Penh New Year Night Market',
      description: 'A lively night market with concerts, street food, and local crafts.',
      city: 'Phnom Penh',
      location: 'Sisowath Quay',
      latitude: 11.562108,
      longitude: 104.888535,
      startDate: new Date('2026-07-15T18:00:00Z'),
      endDate: new Date('2026-07-15T23:00:00Z'),
      price: 0.0,
      currency: 'USD',
      isFree: true,
      imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      organizerId: organizer.id,
      categoryId: categories[0].id
    }),
    Event.create({
      title: 'Angkor Wat Sunrise Concert',
      description: 'An acoustical concert at dawn with traditional Khmer musicians.',
      city: 'Siem Reap',
      location: 'Angkor Park',
      latitude: 13.412469,
      longitude: 103.866986,
      startDate: new Date('2026-08-10T05:30:00Z'),
      endDate: new Date('2026-08-10T08:00:00Z'),
      price: 29.0,
      currency: 'USD',
      isFree: false,
      imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80',
      organizerId: organizer.id,
      categoryId: categories[1].id
    }),
    Event.create({
      title: 'Cambodia Street Food Festival',
      description: 'A festival celebrating Khmer street food, craft beers, and dessert stalls.',
      city: 'Phnom Penh',
      location: 'Olympic Stadium',
      latitude: 11.569205,
      longitude: 104.901551,
      startDate: new Date('2026-09-05T12:00:00Z'),
      endDate: new Date('2026-09-05T20:00:00Z'),
      price: 5.0,
      currency: 'USD',
      isFree: false,
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
      organizerId: organizer.id,
      categoryId: categories[3].id
    })
  ])

  await Promise.all([
    Attraction.create({
      name: 'Phnom Penh Riverside',
      description: 'A scenic riverside promenade with cafes and local culture.',
      city: 'Phnom Penh',
      imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
      category: 'Sightseeing',
      latitude: 11.562108,
      longitude: 104.888535
    }),
    Hotel.create({
      name: 'Tonle Sap Boutique Hotel',
      city: 'Siem Reap',
      description: 'Modern hotel with Khmer-inspired interiors and river views.',
      imageUrl: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
      rating: 4.7
    }),
    Restaurant.create({
      name: 'Khmer Kitchen',
      city: 'Phnom Penh',
      cuisine: 'Khmer',
      description: 'Authentic Cambodian cuisine in a contemporary setting.',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
      rating: 4.8
    })
  ])

  console.log('Seed data created successfully.')
  process.exit(0)
}

seed().catch((error) => {
  console.error('Seeding failed:', error)
  process.exit(1)
})
