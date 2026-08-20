// SEO 메타·canonical·sitemap·robots가 모두 이 값을 사용합니다.
// 네이버 서치어드바이저/구글 서치 콘솔 등록도 이 도메인 기준으로 해야 합니다.
export const SITE_URL = 'https://kunyoungtax.co.kr'

export const SITE_NAME = '건영세무회계'
export const DEFAULT_TITLE = '건영세무회계 | 상속·증여·양도 전문 세무사'
export const DEFAULT_DESCRIPTION =
  '상속세·증여세 자산승계 컨설팅 누적 200건+, 재개발·재건축 양도소득세, 가족법인 설립, 세무조사 대응과 조세불복까지. 세무사가 1:1로 직접 상담하는 건영세무회계입니다.'

export const KEYWORDS = [
  '건영세무회계',
  '세무사',
  '상속세',
  '증여세',
  '양도소득세',
  '자산승계',
  '재개발 양도세',
  '재건축 양도세',
  '가족법인',
  '세무조사 대응',
  '경정청구',
  '조세불복',
  '기장',
  '세무 신고',
  '송파 세무사',
]

/** 검색엔진 리치 스니펫용 구조화 데이터 (schema.org AccountingService) */
export const BUSINESS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: SITE_NAME,
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.png`,
  telephone: '+82-2-6052-8554',
  email: 'hoon_tax@naver.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KR',
    addressRegion: '서울특별시',
    addressLocality: '송파구',
    streetAddress: '송파동 1905, 201호',
  },
  areaServed: '대한민국',
  priceRange: '상담 후 안내',
  knowsAbout: [
    '상속세',
    '증여세',
    '양도소득세',
    '자산승계 컨설팅',
    '재개발·재건축 세무',
    '가족법인 설립',
    '세무조사 대응',
    '경정청구',
    '조세불복',
  ],
}
