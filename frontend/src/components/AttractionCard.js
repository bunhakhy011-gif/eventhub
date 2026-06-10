import Link from 'next/link'

export default function AttractionCard({ attraction }) {
  return (
    <Link href={`/attractions/${attraction.id}`} className="group block overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/80 p-4 shadow-glass transition hover:-translate-y-1 hover:border-cambodia-400/90">
      <div className="h-52 overflow-hidden rounded-2xl bg-slate-800">
        <img src={attraction.imageUrl} alt={attraction.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="mt-4">
        <p className="text-sm uppercase tracking-[0.24em] text-cambodia-300">{attraction.city}</p>
        <h3 className="mt-2 text-xl font-semibold text-white">{attraction.name}</h3>
        <p className="mt-2 text-sm text-slate-300">{attraction.description.slice(0, 90)}...</p>
        <div className="mt-4 flex items-center justify-between text-sm text-slate-400">
          <span>{attraction.category}</span>
          <span>View details</span>
        </div>
      </div>
    </Link>
  )
}
