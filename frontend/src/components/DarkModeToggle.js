import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-2 text-sm text-slate-100 hover:border-slate-500"
    >
      {dark ? 'Light' : 'Dark'}
    </button>
  )
}
