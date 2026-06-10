import DashboardSidebar from '../components/DashboardSidebar'

export default function Dashboard() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[320px_1fr]">
        <DashboardSidebar />
        <div className="space-y-8">
          <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-8 shadow-glass">
            <h1 className="text-3xl font-semibold text-white">Tourist Dashboard</h1>
            <p className="mt-3 text-slate-400">View your saved events, booking history, and personalized recommendations.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-8 shadow-glass">
              <h2 className="text-xl font-semibold text-white">Saved Events</h2>
              <p className="mt-3 text-slate-400">Bookmark your favorite upcoming experiences for easy planning.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-8 shadow-glass">
              <h2 className="text-xl font-semibold text-white">Booking History</h2>
              <p className="mt-3 text-slate-400">Keep track of your tickets and event confirmations in one place.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
