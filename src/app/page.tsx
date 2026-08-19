import LandingB from '../components/landing-b/LandingB'
import { FAQS } from '../components/landing-b/data'

// FAQ 리치 스니펫(구글 검색결과에 질문·답변 펼침 노출) 대상 구조화 데이터
const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
      <LandingB />
    </>
  )
}
