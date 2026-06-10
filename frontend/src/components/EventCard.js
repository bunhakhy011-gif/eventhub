import Link from 'next/link'

export default function EventCard({ event }) {
  const imageUrl = event.image || event.imageUrl || event.photos?.[0] || 'https://images.unsplash.com/photo-1510011359303-7bb16a76f6bb?auto=format&fit=crop&w=1600&q=80'
  const title = event.title || event.name || 'Local Event'
  const description = event.description || 'Discover an unforgettable local experience with culture, performances, and curated attractions.'

  return (
    <Link href={`/events/${event.id}`} className="group block overflow-hidden rounded-[2rem] border border-slate-700/60 bg-slate-900/80 shadow-glass transition duration-200 hover:-translate-y-1 hover:border-cambodia-400/90 hover:bg-slate-800/90">
      <div className="relative h-72 overflow-hidden rounded-[1.8rem] bg-slate-800">
        <img src={imageUrl} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-200">
          {event.category || 'Experience'}
        </div>
      </div>
      <div className="mt-5 px-4 pb-5">
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-slate-400">
          <span>{event.city || 'Cambodia'}</span>
          <span>{event.startDate ? new Date(event.startDate).toLocaleDateString() : 'TBD'}</span>
        </div>
        <h3 className="mt-3 text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300 line-clamp-3">{description}</p>
        <div className="mt-6 flex items-center justify-between gap-3">
          <span className="rounded-full bg-slate-950/80 px-4 py-2 text-sm text-slate-200">{event.isFree ? 'Free entry' : `$${event.price ?? '15'}`}</span>
          <span className="rounded-full bg-cambodia-500 px-4 py-2 text-sm font-semibold text-white transition duration-200 group-hover:bg-cambodia-400">
            Book ticket
          </span>
        </div>
      </div>
    </Link>
  )
}
