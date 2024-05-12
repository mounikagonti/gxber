import React from 'react'
import Header from './modules/header/Header'
import Hero from './modules/hero/Hero'
import Footer from './modules/footer/Footer'
import Sponsors from './modules/sponsors/Sponsors'
import Services from './modules/services/Services'
import Projects from './modules/projects/Projects'
import Team from './modules/Team/Team'
import Process from './modules/process/Process'
import Testimonial from './modules/testimonial/Testimonial'
import NewsLatter from './modules/newslatter/NewsLatter'
import ArrowTop from './modules/arrowTop/ArrowTop'


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Sponsors />
      <Services />
      <Projects />
      <Process />
      <Team />
      <Testimonial />
      <NewsLatter />
      <Footer />
      <ArrowTop />
    </div>
  )
}

export default App
