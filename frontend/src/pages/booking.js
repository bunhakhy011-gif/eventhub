export default function BookingPage() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-8 shadow-glass">
          <h1 className="text-3xl font-semibold text-white">Booking History</h1>
          <p className="mt-3 text-slate-400">Review your confirmed tickets, download QR codes, and manage upcoming trips.</p>
        </div>
        <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-6 shadow-glass">
          <p className="text-slate-300">No booking data available yet. Use the event detail page to book tickets.</p>
        </div>
      </div>
    </section>
  )
}
