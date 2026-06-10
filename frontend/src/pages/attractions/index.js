import { useEffect, useState } from 'react'
import api from '../../lib/api'
import AttractionCard from '../../components/AttractionCard'

export default function AttractionsPage() {
  const [attractions, setAttractions] = useState([])
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchAttractions = async () => {
    setLoading(true)
    const query = city ? `?city=${encodeURIComponent(city)}` : ''
    const response = await api.get(`/attractions${query}`)
    setAttractions(response.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchAttractions()
  }, [])

  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-8 shadow-glass">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cambodia-300">Attraction discovery</p>
              <h1 className="mt-2 text-4xl font-semibold text-white">Explore Cambodia's top destinations</h1>
            </div>
            <button onClick={fetchAttractions} className="rounded-full bg-cambodia-500 px-6 py-3 text-sm font-semibold text-white hover:bg-cambodia-400">Refresh</button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Filter by city"
              className="rounded-3xl border border-slate-700 bg-slate-900 px-4 py-4 text-white outline-none focus:border-cambodia-400"
            />
            <button onClick={fetchAttractions} className="rounded-full bg-slate-800 px-6 py-4 text-sm text-white hover:bg-slate-700">Apply filter</button>
          </div>
        </div>

        {loading ? (
          <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-12 text-center text-slate-400 shadow-glass">Loading attractions...</div>
        ) : attractions.length === 0 ? (
          <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-12 text-center text-slate-400 shadow-glass">No attractions found.</div>
        ) : (
          <div className="grid gap-6 xl:grid-cols-3">{attractions.map((attraction) => <AttractionCard key={attraction.id} attraction={attraction} />)}</div>
        )}
      </div>
    </section>
  )
}
