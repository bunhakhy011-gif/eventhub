import { useEffect, useState } from 'react'
import HeroSearch from '../components/HeroSearch'
import EventCard from '../components/EventCard'
import api from '../lib/api'

const categories = [
  'Music',
  'Food & Drink',
  'Culture',
  'Adventure',
  'Wellness',
  'Family',
]

export default function Home() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({ location: 'Phnom Penh', keyword: 'Festival', date: '2026-07-01' })

  const fetchEvents = async (searchFilters = filters) => {
    setLoading(true)
    setFilters(searchFilters)

    const params = new URLSearchParams()
    if (searchFilters.location) params.set('location', searchFilters.location)
    if (searchFilters.keyword) params.set('search', searchFilters.keyword)
    if (searchFilters.date) params.set('date', searchFilters.date)

    const query = params.toString() ? `?${params.toString()}` : ''
    const response = await api.get(`/events${query}`)
    setEvents(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchEvents(filters)
  }, [])

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-10 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] border border-slate-700/60 bg-slate-950/80 p-10 shadow-glass md:p-14">
          <div className="flex flex-col gap-3">
            <span className="inline-flex rounded-full bg-cambodia-500/15 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cambodia-300">
              Local experiences, instant tickets
            </span>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Discover the best Cambodia events, tours, and cultural experiences.
            </h1>
            <p className="mt-6 max-w-2xl text-slate-300 leading-8">
              Browse live shows, festivals, culinary activities, heritage tours, and city attractions—all in one marketplace.
            </p>
          </div>

          <div className="mt-10">
            <HeroSearch onSearch={fetchEvents} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <span key={category} className="rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm text-slate-300">
                {category}
              </span>
            ))}
          </div>
        </div>

        <section className="mt-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Featured events</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Explore top ticketed experiences</h2>
            </div>
            <p className="text-sm text-slate-400">Trending now in {filters.location}</p>
          </div>

          {loading ? (
            <div className="mt-10 text-center text-slate-400">Loading events...</div>
          ) : events.length === 0 ? (
            <div className="mt-10 rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-10 text-center text-slate-300">
              No events found. Try a different destination, date, or keyword.
            </div>
          ) : (
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {events.slice(0, 6).map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </section>
      </div>
    </section>
  )
}
