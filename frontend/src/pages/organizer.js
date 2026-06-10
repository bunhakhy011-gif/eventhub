export default function OrganizerDashboard() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-8 shadow-glass">
          <h1 className="text-3xl font-semibold text-white">Organizer Dashboard</h1>
          <p className="mt-3 text-slate-400">Create events, manage tickets, and track sales analytics.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-6 shadow-glass">
            <h2 className="text-xl font-semibold text-white">Create Event</h2>
            <p className="mt-3 text-slate-400">Publish event listings with images, schedules, and ticket tiers.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-6 shadow-glass">
            <h2 className="text-xl font-semibold text-white">Manage Sales</h2>
            <p className="mt-3 text-slate-400">Track bookings and revenue across KHQR, Bakong, and cards.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-6 shadow-glass">
            <h2 className="text-xl font-semibold text-white">Organizer Profile</h2>
            <p className="mt-3 text-slate-400">Showcase your brand, contact details, and past activities.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
