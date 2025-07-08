import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PartnersSection from './components/PartnersSection'
import BenefitsSection from './components/BenefitsSection'
import TestimonialsSection from './components/TestimonialsSection'
import DownloadAppSection from './components/DownloadAppSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <PartnersSection/>
      <BenefitsSection/>
      <TestimonialsSection/>
      <DownloadAppSection/>
    </div>
  )
}

export default App
