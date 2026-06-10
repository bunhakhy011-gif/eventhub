import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common.Authorization
  }
}

// Mock data for fallback
export const mockEvents = [
  {
    id: '1',
    title: 'Angkor Wat Heritage Tour',
    name: 'Angkor Wat Heritage Tour',
    description: 'Explore one of the largest religious monuments in the world with our expert guides.',
    city: 'Siem Reap',
    location: 'Siem Reap',
    imageUrl: 'https://images.unsplash.com/photo-1548013146-72db221e5e4f?auto=format&fit=crop&w=1600&q=80',
    image: 'https://images.unsplash.com/photo-1548013146-72db221e4f?auto=format&fit=crop&w=1600&q=80',
    price: 45,
    isFree: false,
    category: 'Culture',
    startDate: '2026-07-15',
    organizer: 'Cambodia Heritage Tours'
  },
  {
    id: '2',
    title: 'Tonlé Sap Lake Sunset Cruise',
    name: 'Tonlé Sap Lake Sunset Cruise',
    description: 'Experience a magical sunset over Southeast Asia\'s largest freshwater lake.',
    city: 'Phnom Penh',
    location: 'Phnom Penh',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    price: 35,
    isFree: false,
    category: 'Adventure',
    startDate: '2026-07-20',
    organizer: 'Mekong Tours'
  },
  {
    id: '3',
    title: 'Khmer Cooking Class',
    name: 'Khmer Cooking Class',
    description: 'Learn to cook authentic Cambodian dishes from a local chef in a traditional home.',
    city: 'Battambang',
    location: 'Battambang',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80',
    price: 40,
    isFree: false,
    category: 'Food & Drink',
    startDate: '2026-07-18',
    organizer: 'Local Chefs Cooperative'
  },
  {
    id: '4',
    title: 'Phnom Penh Street Art Walking Tour',
    name: 'Phnom Penh Street Art Walking Tour',
    description: 'Discover vibrant street art and meet local artists in the heart of Phnom Penh.',
    city: 'Phnom Penh',
    location: 'Phnom Penh',
    imageUrl: 'https://images.unsplash.com/photo-1549887534-7e9e5267b4e9?auto=format&fit=crop&w=1600&q=80',
    image: 'https://images.unsplash.com/photo-1549887534-7e9e5267b4e9?auto=format&fit=crop&w=1600&q=80',
    price: 25,
    isFree: false,
    category: 'Culture',
    startDate: '2026-07-22',
    organizer: 'Urban Art Collective'
  },
  {
    id: '5',
    title: 'Bamboo Island Day Trip',
    name: 'Bamboo Island Day Trip',
    description: 'Pristine beaches, crystal waters, and jungle hikes on a remote island paradise.',
    city: 'Koh Rong',
    location: 'Koh Rong',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    price: 55,
    isFree: false,
    category: 'Adventure',
    startDate: '2026-07-17',
    organizer: 'Island Explorers'
  },
  {
    id: '6',
    title: 'Traditional Silk Weaving Workshop',
    name: 'Traditional Silk Weaving Workshop',
    description: 'Learn the ancient art of silk weaving from master artisans in Takeo province.',
    city: 'Takeo',
    location: 'Takeo',
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1600&q=80',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1600&q=80',
    price: 30,
    isFree: false,
    category: 'Culture',
    startDate: '2026-07-19',
    organizer: 'Silk Heritage Foundation'
  }
]

// Add error interceptor for fallback
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.message)
    throw error
  }
)

export default api
