import React from 'react'
import About from '../../components/About'
import Features from '../../components/Features'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import Cta from '../../components/CTA'
import Portfolio from '../../components/Portfolio'
import Pricing from '../../components/Princing'
import Faq from '../../components/Faq'
import Team from '../../components/Team'
import Contact from '../../components/Contact'

const Main = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Features />
      <Cta />
      <Portfolio />
      <Pricing />
      <Faq />
      <Team />
      <Contact />
    </>
  )
}

export default Main