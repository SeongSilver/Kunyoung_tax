import KakaoFloatingButton from '../shared/KakaoFloatingButton'
import About from './About'
import Contact from './Contact'
import Faq from './Faq'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Process from './Process'
import Services from './Services'
import TrustStats from './TrustStats'
import { KAKAO_URL } from './data'
import './landing-classic.css'

export default function LandingClassic() {
  return (
    <div className="lc">
      <Header />
      <Hero />
      <TrustStats />
      <Services />
      <About />
      <Process />
      <Faq />
      <Contact />
      <Footer />
      <KakaoFloatingButton href={KAKAO_URL} />
    </div>
  )
}
