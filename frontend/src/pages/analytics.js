export default function AnalyticsPage() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-8 shadow-glass">
          <h1 className="text-3xl font-semibold text-white">Analytics</h1>
          <p className="mt-3 text-slate-400">Monitor visitor trends, ticket sales, and event performance in one view.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-6 shadow-glass">
            <h2 className="text-xl font-semibold text-white">Event Reach</h2>
            <p className="mt-3 text-slate-400">Track impressions and interest for every listing.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-6 shadow-glass">
            <h2 className="text-xl font-semibold text-white">Sales</h2>
            <p className="mt-3 text-slate-400">Review bookings and revenue by payment provider.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-6 shadow-glass">
            <h2 className="text-xl font-semibold text-white">Reviews</h2>
            <p className="mt-3 text-slate-400">Analyze attendee ratings and feedback.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
