import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import api from '../../lib/api'

export default function AttractionDetail() {
  const router = useRouter()
  const { id } = router.query
  const [attraction, setAttraction] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    const fetchAttraction = async () => {
      const response = await api.get(`/attractions/${id}`)
      setAttraction(response.data)
      setLoading(false)
    }
    fetchAttraction()
  }, [id])

  if (loading) return <div className="px-4 py-20 text-center text-slate-400">Loading attraction...</div>
  if (!attraction) return <div className="px-4 py-20 text-center text-slate-400">Attraction not found.</div>

  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-8 shadow-glass">
        <div className="rounded-3xl overflow-hidden bg-slate-900/90">
          <img src={attraction.imageUrl} alt={attraction.name} className="h-80 w-full object-cover" />
        </div>
        <div className="mt-8 space-y-4">
          <h1 className="text-4xl font-semibold text-white">{attraction.name}</h1>
          <p className="text-slate-300">{attraction.description}</p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span className="rounded-full border border-slate-700 px-4 py-2">City: {attraction.city}</span>
            <span className="rounded-full border border-slate-700 px-4 py-2">Category: {attraction.category}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
