import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-900/80 border-b border-slate-700/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="text-xl font-semibold tracking-tight text-cambodia-100">
          CamEvent Explorer
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden gap-4 md:flex text-slate-300">
            <Link href="/events" className="hover:text-white">Events</Link>
            <Link href="/attractions" className="hover:text-white">Attractions</Link>
            <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
          </nav>
          <Link href="/login" className="rounded-full bg-cambodia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cambodia-500/20 hover:bg-cambodia-400">Login</Link>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}
