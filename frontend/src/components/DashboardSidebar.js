import Link from 'next/link'

export default function DashboardSidebar() {
  return (
    <aside className="w-full max-w-sm rounded-[2rem] border border-slate-700/70 bg-slate-950/80 p-6 shadow-glass">
      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Dashboard</p>
      <div className="mt-6 space-y-3 text-slate-200">
        <Link href="/dashboard" className="block rounded-2xl px-4 py-3 hover:bg-slate-800">Saved Events</Link>
        <Link href="/booking" className="block rounded-2xl px-4 py-3 hover:bg-slate-800">Bookings</Link>
        <Link href="/organizer" className="block rounded-2xl px-4 py-3 hover:bg-slate-800">Organizer Tools</Link>
        <Link href="/profile" className="block rounded-2xl px-4 py-3 hover:bg-slate-800">Profile</Link>
        <Link href="/settings" className="block rounded-2xl px-4 py-3 hover:bg-slate-800">Settings</Link>
      </div>
    </aside>
  )
}
