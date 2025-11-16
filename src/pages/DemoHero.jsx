import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackgroundFX from '../components/BackgroundFX'
import Hero from '../components/Hero'

export default function DemoHero() {
  return (
    <div className="relative min-h-screen text-white">
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  )
}
