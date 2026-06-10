export default function SettingsPage() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-8 shadow-glass">
          <h1 className="text-3xl font-semibold text-white">Settings</h1>
          <p className="mt-3 text-slate-400">Control your app preferences, language, notifications, and security.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-6 shadow-glass">
            <h2 className="text-xl font-semibold text-white">Notifications</h2>
            <p className="mt-3 text-slate-400">Manage event reminders, booking confirmations, and nearby event alerts.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-6 shadow-glass">
            <h2 className="text-xl font-semibold text-white">Security</h2>
            <p className="mt-3 text-slate-400">Update your password and authentication preferences.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
