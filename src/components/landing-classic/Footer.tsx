export default function Footer() {
  return (
    <div style={{ background: '#0F1D31', padding: '40px 24px', textAlign: 'center' }}>
      <div
        style={{
          fontFamily: "'Noto Serif KR',serif",
          fontWeight: 700,
          fontSize: 17,
          color: '#F5EFE3',
        }}
      >
        건영세무회계
      </div>
      <p
        style={{
          fontSize: 13,
          color: 'rgba(245,239,227,.5)',
          lineHeight: 1.9,
          margin: '14px 0 0',
        }}
      >
        대표 세무사 조건훈 · 서울특별시 송파구 송파동 1905, 201호
        <br />
        Tel. 02-6052-8554 · Fax. 02-6052-8555 · hoon_tax@naver.com
      </p>
      <p style={{ fontSize: 12, color: 'rgba(245,239,227,.35)', margin: '16px 0 0' }}>
        © 2026 건영세무회계. All rights reserved.
      </p>
    </div>
  )
}
