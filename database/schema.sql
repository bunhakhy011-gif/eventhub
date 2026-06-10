-- PostgreSQL schema for CamEvent Explorer

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255),
  role VARCHAR(20) NOT NULL DEFAULT 'tourist',
  avatar_url TEXT,
  language VARCHAR(5) NOT NULL DEFAULT 'en',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE organizers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  phone VARCHAR(50),
  website TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  city VARCHAR(100) NOT NULL,
  location VARCHAR(255),
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  "startDate" TIMESTAMP WITH TIME ZONE NOT NULL,
  "endDate" TIMESTAMP WITH TIME ZONE,
  price NUMERIC(10,2) DEFAULT 0.0,
  currency VARCHAR(10) DEFAULT 'USD',
  "isFree" BOOLEAN DEFAULT FALSE,
  "imageUrl" TEXT,
  status VARCHAR(20) DEFAULT 'published',
  "organizerId" UUID REFERENCES organizers(id) ON DELETE SET NULL,
  "categoryId" UUID REFERENCES categories(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "userId" UUID REFERENCES users(id) ON DELETE CASCADE,
  "eventId" UUID REFERENCES events(id) ON DELETE CASCADE,
  quantity INTEGER DEFAULT 1,
  "totalPrice" NUMERIC(10,2) NOT NULL,
  status VARCHAR(20) DEFAULT 'confirmed',
  "qrCode" TEXT,
  "paymentId" UUID REFERENCES payments(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  provider VARCHAR(20) NOT NULL,
  amount NUMERIC(10,2) NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  "transactionId" VARCHAR(255),
  "userId" UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "userId" UUID REFERENCES users(id) ON DELETE CASCADE,
  "eventId" UUID REFERENCES events(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  photos TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE attractions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  city VARCHAR(100) NOT NULL,
  "imageUrl" TEXT,
  category VARCHAR(100),
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "userId" UUID REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(100),
  title VARCHAR(255),
  message TEXT,
  "isRead" BOOLEAN DEFAULT FALSE,
  "eventId" UUID REFERENCES events(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE favorites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "userId" UUID REFERENCES users(id) ON DELETE CASCADE,
  "eventId" UUID REFERENCES events(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE hotels (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  description TEXT,
  "imageUrl" TEXT,
  rating NUMERIC(2,1) DEFAULT 4.0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE restaurants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  cuisine VARCHAR(100),
  description TEXT,
  "imageUrl" TEXT,
  rating NUMERIC(2,1) DEFAULT 4.0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
