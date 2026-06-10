export default function AdminPage() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-8 shadow-glass">
          <h1 className="text-3xl font-semibold text-white">Admin Dashboard</h1>
          <p className="mt-3 text-slate-400">Manage users, events, payments, analytics, and reviews from one console.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-6 shadow-glass">
            <h2 className="text-xl font-semibold text-white">User Management</h2>
            <p className="mt-3 text-slate-400">View and moderate accounts for tourists, organizers, and admins.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-6 shadow-glass">
            <h2 className="text-xl font-semibold text-white">Event Control</h2>
            <p className="mt-3 text-slate-400">Approve listings and moderate event content quickly.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-6 shadow-glass">
            <h2 className="text-xl font-semibold text-white">Analytics</h2>
            <p className="mt-3 text-slate-400">Track bookings, revenue, and platform engagement.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-6 shadow-glass">
            <h2 className="text-xl font-semibold text-white">Reports</h2>
            <p className="mt-3 text-slate-400">Review payments, disputes, and top performers.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
