'use client'

import KakaoFloatingButton from '../shared/KakaoFloatingButton'
import About from './About'
import Contact from './Contact'
import Expertise from './Expertise'
import Faq from './Faq'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Process from './Process'
import Services from './Services'
import { KAKAO_URL } from './data'
import './landing-b.css'

export default function LandingB() {
  return (
    <div className="lb">
      <Header />
      <Hero />
      <Services />
      <About />
      <Expertise />
      <Process />
      <Faq />
      <Contact />
      <Footer />
      <KakaoFloatingButton href={KAKAO_URL} />
    </div>
  )
}