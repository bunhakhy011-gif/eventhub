export default function ProfilePage() {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-8 shadow-glass">
          <h1 className="text-3xl font-semibold text-white">Profile</h1>
          <p className="mt-3 text-slate-400">Update your personal details, preferences, and language settings.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-6 shadow-glass">
            <h2 className="text-xl font-semibold text-white">Account</h2>
            <p className="mt-3 text-slate-400">Manage your information, email, and security settings.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-6 shadow-glass">
            <h2 className="text-xl font-semibold text-white">Preferences</h2>
            <p className="mt-3 text-slate-400">Choose your default language, notifications, and display mode.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
