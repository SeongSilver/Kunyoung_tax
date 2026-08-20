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
  // 네이버 서치어드바이저 / 구글 서치 콘솔에서 발급받은 확인 코드를
  // Vercel 환경변수(NAVER_SITE_VERIFICATION, GOOGLE_SITE_VERIFICATION)로 넣고 재배포하면 반영됩니다.
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION && { google: process.env.GOOGLE_SITE_VERIFICATION }),
    ...(process.env.NAVER_SITE_VERIFICATION && {
      other: { 'naver-site-verification': process.env.NAVER_SITE_VERIFICATION },
    }),
  },
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
