import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PartnersSection from './components/PartnersSection'
import BenefitsSection from './components/BenefitsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <PartnersSection/>
      <BenefitsSection/>
    </div>
  )
}

export default App
