import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PartnersSection from './components/PartnersSection'
import BenefitsSection from './components/BenefitsSection'
import TestimonialsSection from './components/TestimonialsSection'
import DownloadAppSection from './components/DownloadAppSection'
import Footer from './components/Footer'
import FAQSection from './components/FAQSection'

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
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default App
