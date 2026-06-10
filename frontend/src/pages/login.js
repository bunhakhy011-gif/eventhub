import { useState } from 'react'
import api from '../lib/api'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await api.post('/auth/login', { email, password })
      localStorage.setItem('camevent_token', data.token)
      setMessage('Login successful. Redirecting...')
      setTimeout(() => window.location.href = '/', 800)
    } catch (error) {
      setMessage(error.response?.data?.message || 'Login failed')
    }
  }

  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-slate-700/60 bg-slate-950/80 p-10 shadow-glass">
        <h1 className="text-3xl font-semibold text-white">Login to CamEvent Explorer</h1>
        <p className="mt-3 text-slate-400">Access your saved events, bookings, and personalized recommendations.</p>
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <label className="block text-sm text-slate-300">
            Email
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-4 text-white outline-none focus:border-cambodia-400" />
          </label>
          <label className="block text-sm text-slate-300">
            Password
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900 px-4 py-4 text-white outline-none focus:border-cambodia-400" />
          </label>
          <button className="w-full rounded-full bg-cambodia-500 px-6 py-4 text-sm font-semibold text-white hover:bg-cambodia-400">Login</button>
        </form>
        <div className="mt-4 text-sm text-slate-400">New to CamEvent Explorer? <a href="/register" className="text-cambodia-300 underline">Create an account</a></div>
        {message && <p className="mt-4 text-sm text-cambodia-200">{message}</p>}
      </div>
    </section>
  )
}
