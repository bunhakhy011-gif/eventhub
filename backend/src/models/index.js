import Sequelize from 'sequelize'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const isPostgres = process.env.DATABASE_URL?.startsWith('postgres')
let sequelize

if (isPostgres) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    }
  })
} else {
  const dbPath = process.env.DATABASE_URL?.replace('sqlite:', '') || './camevent.db'
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: dbPath,
    logging: false
  })
}

const { DataTypes } = Sequelize

export const User = sequelize.define('User', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.ENUM('tourist', 'organizer', 'admin'), defaultValue: 'tourist' },
  avatarUrl: { type: DataTypes.STRING },
  language: { type: DataTypes.ENUM('en', 'km', 'zh'), defaultValue: 'en' }
})

export const Organizer = sequelize.define('Organizer', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  phone: { type: DataTypes.STRING },
  website: { type: DataTypes.STRING }
})

export const Category = sequelize.define('Category', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false }
})

export const Event = sequelize.define('Event', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  city: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING },
  latitude: { type: DataTypes.FLOAT },
  longitude: { type: DataTypes.FLOAT },
  startDate: { type: DataTypes.DATE, allowNull: false },
  endDate: { type: DataTypes.DATE },
  price: { type: DataTypes.DECIMAL(10, 2), defaultValue: 0.0 },
  currency: { type: DataTypes.STRING, defaultValue: 'USD' },
  isFree: { type: DataTypes.BOOLEAN, defaultValue: false },
  imageUrl: { type: DataTypes.STRING },
  status: { type: DataTypes.ENUM('draft', 'published', 'cancelled'), defaultValue: 'published' }
})

export const Booking = sequelize.define('Booking', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
  totalPrice: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  status: { type: DataTypes.ENUM('pending', 'confirmed', 'cancelled'), defaultValue: 'confirmed' },
  qrCode: { type: DataTypes.STRING }
})

export const Payment = sequelize.define('Payment', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  provider: { type: DataTypes.ENUM('khqr', 'bakong', 'visa', 'mastercard', 'wallet'), allowNull: false },
  amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  status: { type: DataTypes.ENUM('pending', 'completed', 'failed'), defaultValue: 'pending' },
  transactionId: { type: DataTypes.STRING }
})

export const Review = sequelize.define('Review', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  rating: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1, max: 5 } },
  comment: { type: DataTypes.TEXT },
  photos: { type: DataTypes.JSON, defaultValue: [] }
})

export const Attraction = sequelize.define('Attraction', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  city: { type: DataTypes.STRING, allowNull: false },
  imageUrl: { type: DataTypes.STRING },
  category: { type: DataTypes.STRING },
  latitude: { type: DataTypes.FLOAT },
  longitude: { type: DataTypes.FLOAT }
})

export const Notification = sequelize.define('Notification', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  type: { type: DataTypes.STRING },
  title: { type: DataTypes.STRING },
  message: { type: DataTypes.TEXT },
  isRead: { type: DataTypes.BOOLEAN, defaultValue: false }
})

export const Favorite = sequelize.define('Favorite', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true }
})

export const Hotel = sequelize.define('Hotel', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  city: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  imageUrl: { type: DataTypes.STRING },
  rating: { type: DataTypes.FLOAT, defaultValue: 4.2 }
})

export const Restaurant = sequelize.define('Restaurant', {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  city: { type: DataTypes.STRING, allowNull: false },
  cuisine: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },
  imageUrl: { type: DataTypes.STRING },
  rating: { type: DataTypes.FLOAT, defaultValue: 4.4 }
})

User.hasMany(Booking, { foreignKey: 'userId' })
User.hasMany(Review, { foreignKey: 'userId' })
User.hasMany(Notification, { foreignKey: 'userId' })
User.hasMany(Favorite, { foreignKey: 'userId' })
User.hasMany(Event, { foreignKey: 'organizerId' })

Organizer.hasMany(Event, { foreignKey: 'organizerId' })

Category.hasMany(Event, { foreignKey: 'categoryId' })

Event.belongsTo(Category, { foreignKey: 'categoryId' })
Event.belongsTo(Organizer, { foreignKey: 'organizerId' })
Event.hasMany(Booking, { foreignKey: 'eventId' })
Event.hasMany(Review, { foreignKey: 'eventId' })
Event.hasMany(Notification, { foreignKey: 'eventId' })

Booking.belongsTo(User, { foreignKey: 'userId' })
Booking.belongsTo(Event, { foreignKey: 'eventId' })
Booking.belongsTo(Payment, { foreignKey: 'paymentId' })

Payment.belongsTo(User, { foreignKey: 'userId' })
Payment.hasOne(Booking, { foreignKey: 'paymentId' })

Review.belongsTo(User, { foreignKey: 'userId' })
Review.belongsTo(Event, { foreignKey: 'eventId' })

Notification.belongsTo(User, { foreignKey: 'userId' })
Notification.belongsTo(Event, { foreignKey: 'eventId' })

Favorite.belongsTo(User, { foreignKey: 'userId' })
Favorite.belongsTo(Event, { foreignKey: 'eventId' })

export { sequelize }
