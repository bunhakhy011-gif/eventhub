import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import api from '../../lib/api'

export default function EventDetail() {
  const router = useRouter()
  const { id } = router.query
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    const fetchEvent = async () => {
      const response = await api.get(`/events/${id}`)
      setEvent(response.data)
      setLoading(false)
    }
    fetchEvent()
  }, [id])

  if (loading) return <div className="px-4 py-20 text-center text-slate-400">Loading event...</div>
  if (!event) return <div className="px-4 py-20 text-center text-slate-400">Event not found.</div>

  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="rounded-[2rem] overflow-hidden bg-slate-950/80 shadow-glass">
          <div className="relative h-96 bg-slate-900">
            <img src={event.imageUrl} alt={event.title} className="h-full w-full object-cover" />
          </div>
          <div className="space-y-6 p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cambodia-300">{event.city}</p>
                <h1 className="mt-2 text-4xl font-semibold text-white">{event.title}</h1>
              </div>
              <div className="rounded-3xl bg-slate-900 px-6 py-4 text-right">
                <p className="text-sm text-slate-400">From</p>
                <p className="mt-2 text-3xl font-semibold text-white">{event.isFree ? 'Free' : `$${event.price}`}</p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-slate-700 p-5 bg-slate-900/80">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Location</p>
                <p className="mt-3 text-lg text-white">{event.location}</p>
              </div>
              <div className="rounded-3xl border border-slate-700 p-5 bg-slate-900/80">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Date</p>
                <p className="mt-3 text-lg text-white">{new Date(event.startDate).toLocaleString()}</p>
              </div>
              <div className="rounded-3xl border border-slate-700 p-5 bg-slate-900/80">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Organizer</p>
                <p className="mt-3 text-lg text-white">{event.Organizer?.name || 'CamEvent'}</p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-4">
              <button className="rounded-full bg-cambodia-500 px-6 py-4 text-sm font-semibold text-white hover:bg-cambodia-400">Book Now</button>
              <button className="rounded-full border border-slate-700 px-6 py-4 text-sm text-slate-100 hover:border-cambodia-400">Add to wishlist</button>
              <button className="rounded-full border border-slate-700 px-6 py-4 text-sm text-slate-100 hover:border-cambodia-400">Share</button>
              <button className="rounded-full border border-slate-700 px-6 py-4 text-sm text-slate-100 hover:border-cambodia-400">Nearby attractions</button>
            </div>
            <div className="space-y-4 rounded-3xl border border-slate-700 bg-slate-900/80 p-6">
              <h2 className="text-2xl font-semibold text-white">About the event</h2>
              <p className="text-slate-300 leading-7">{event.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
