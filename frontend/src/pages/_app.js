import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
