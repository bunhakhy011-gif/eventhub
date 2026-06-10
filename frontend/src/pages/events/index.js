import { useEffect, useState } from 'react'
import api from '../../lib/api'
import EventCard from '../../components/EventCard'

export default function EventsPage() {
  const [events, setEvents] = useState([])
  const [search, setSearch] = useState('')
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchEvents = async () => {
    setLoading(true)
    const filters = []
    if (search) filters.push(`search=${encodeURIComponent(search)}`)
    if (city) filters.push(`city=${encodeURIComponent(city)}`)
    const response = await api.get(`/events${filters.length ? `?${filters.join('&')}` : ''}`)
    setEvents(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-8 shadow-glass">
          <h1 className="text-3xl font-semibold text-white">Discover Events</h1>
          <p className="mt-3 max-w-2xl text-slate-400">Filter by city, category, price, and find the best experiences in Cambodia.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search events" className="rounded-3xl border border-slate-700 bg-slate-900 px-4 py-4 text-white outline-none focus:border-cambodia-400" />
            <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" className="rounded-3xl border border-slate-700 bg-slate-900 px-4 py-4 text-white outline-none focus:border-cambodia-400" />
            <button onClick={fetchEvents} className="rounded-full bg-cambodia-500 px-6 py-4 text-sm font-semibold text-white hover:bg-cambodia-400">Apply filters</button>
          </div>
        </div>

        {loading ? (
          <div className="mt-10 text-center text-slate-400">Loading events...</div>
        ) : (
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {events.map((event) => (<EventCard key={event.id} event={event} />))}
          </div>
        )}
      </div>
    </section>
  )
}
