import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackgroundFX from '../components/BackgroundFX'
import Hero from '../components/Hero'
import FeatureCards from '../components/FeatureCards'
import AppShowcase from '../components/sections/AppShowcase'
import Problem from '../components/sections/Problem'
import Solution from '../components/sections/Solution'
import StatsSection from '../components/sections/StatsSection'
import Market from '../components/sections/Market'
import CTA from '../components/sections/CTA'

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <AppShowcase />
        <Problem />
        <Solution />
        <FeatureCards />
        <StatsSection />
        <Market />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
