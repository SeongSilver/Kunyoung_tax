import type { Metadata, Viewport } from 'next'
import { SITE_URL, SITE_NAME, DEFAULT_TITLE, DEFAULT_DESCRIPTION, KEYWORDS, BUSINESS_JSON_LD } from '../lib/site'
import '../index.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: SITE_NAME }],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: '자산승계 컨설팅 200건+ · 재개발·재건축 양도세 · 세무조사 대응. 세무사가 1:1로 직접 상담합니다.',
    url: '/',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: '자산승계 컨설팅 200건+ · 재개발·재건축 양도세 · 세무조사 대응. 세무사가 1:1로 직접 상담합니다.',
  },
  // TODO: 네이버 서치어드바이저 / 구글 서치 콘솔 등록 후 발급받는 사이트 확인 코드를 넣으세요.
  // verification: {
  //   google: '구글 확인 코드',
  //   other: { 'naver-site-verification': '네이버 확인 코드' },
  // },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard는 Google Fonts에 없어 동적 서브셋 CDN을 유지합니다 */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(BUSINESS_JSON_LD) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
