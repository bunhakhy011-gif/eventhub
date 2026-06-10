import { useState } from 'react'

export default function HeroSearch({ onSearch }) {
  const [location, setLocation] = useState('Phnom Penh')
  const [keyword, setKeyword] = useState('Festival')
  const [date, setDate] = useState('2026-07-01')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSearch({ location, keyword, date })
      }}
      className="rounded-[2rem] border border-slate-700/70 bg-slate-950/80 p-6 shadow-glass"
    >
      <div className="grid gap-4 md:grid-cols-[1.5fr_1fr_1fr_0.7fr]">
        <label className="block text-slate-300">
          <span className="text-sm uppercase tracking-[0.24em] text-slate-400">Where</span>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Search for local events"
            className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-4 text-white outline-none focus:border-cambodia-400"
          />
        </label>
        <label className="block text-slate-300">
          <span className="text-sm uppercase tracking-[0.24em] text-slate-400">What</span>
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search by event name or type"
            className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-4 text-white outline-none focus:border-cambodia-400"
          />
        </label>
        <label className="block text-slate-300">
          <span className="text-sm uppercase tracking-[0.24em] text-slate-400">When</span>
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-4 text-white outline-none focus:border-cambodia-400"
          />
        </label>
        <button className="mt-6 h-full w-full rounded-3xl bg-cambodia-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-cambodia-400 md:mt-0">
          Find tickets
        </button>
      </div>
    </form>
  )
}
