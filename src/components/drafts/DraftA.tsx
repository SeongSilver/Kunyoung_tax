import DraftLabel from './DraftLabel'

export default function DraftA() {
  return (
    <div id="1a" style={{ width: 900, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <DraftLabel
        code="1a"
        title="A안 · 클래식 & 신뢰"
        desc="네이비 #14263F + 골드 #C3A15F · 세리프 헤딩(Noto Serif KR) · 전통 있는 전문직 사무소의 묵직한 무드"
      />
      <div
        style={{
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0,0,0,.10)',
          background: '#14263F',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 48px',
            borderBottom: '1px solid rgba(255,255,255,.12)',
          }}
        >
          <div
            style={{
              fontFamily: "'Noto Serif KR',serif",
              fontWeight: 700,
              fontSize: 19,
              color: '#F5EFE3',
            }}
          >
            ○○세무회계사무소
          </div>
          <div
            style={{
              display: 'flex',
              gap: 28,
              alignItems: 'center',
              fontSize: 14,
              color: 'rgba(245,239,227,.75)',
            }}
          >
            <span>서비스</span>
            <span>대표 소개</span>
            <span>FAQ</span>
            <span
              style={{
                background: '#C3A15F',
                color: '#14263F',
                fontWeight: 700,
                padding: '10px 20px',
                borderRadius: 4,
              }}
            >
              상담 신청
            </span>
          </div>
        </div>
        <div style={{ padding: '88px 48px 96px', textAlign: 'center' }}>
          <div style={{ fontSize: 13, letterSpacing: '.32em', color: '#C3A15F', fontWeight: 600 }}>
            TAX &amp; ACCOUNTING
          </div>
          <h2
            style={{
              fontFamily: "'Noto Serif KR',serif",
              fontSize: 44,
              fontWeight: 700,
              color: '#F5EFE3',
              margin: '20px 0 0',
              lineHeight: 1.4,
            }}
          >
            숫자 너머의 신뢰,
            <br />
            사업의 든든한 동반자
          </h2>
          <p
            style={{
              margin: '20px 0 0',
              fontSize: 16,
              color: 'rgba(245,239,227,.7)',
              lineHeight: 1.7,
            }}
          >
            기장대리부터 절세 컨설팅까지,
            <br />
            경력 [N]년의 세무 전문가가 직접 책임집니다.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 36 }}>
            <span
              style={{
                background: '#C3A15F',
                color: '#14263F',
                fontWeight: 700,
                fontSize: 15,
                padding: '14px 32px',
                borderRadius: 4,
              }}
            >
              무료 상담 신청
            </span>
            <span
              style={{
                border: '1px solid rgba(245,239,227,.4)',
                color: '#F5EFE3',
                fontSize: 15,
                padding: '14px 32px',
                borderRadius: 4,
              }}
            >
              서비스 안내
            </span>
          </div>
          <div
            style={{
              marginTop: 56,
              display: 'inline-flex',
              gap: 48,
              paddingTop: 24,
              borderTop: '1px solid rgba(255,255,255,.12)',
              color: '#F5EFE3',
            }}
          >
            {[
              { v: '[N]년', l: '세무 경력' },
              { v: '[N]+', l: '거래처' },
              { v: '100%', l: '대표 직접 상담' },
            ].map((stat) => (
              <div key={stat.l}>
                <div
                  style={{
                    fontFamily: "'Noto Serif KR',serif",
                    fontSize: 26,
                    fontWeight: 700,
                    color: '#C3A15F',
                  }}
                >
                  {stat.v}
                </div>
                <div style={{ fontSize: 13, color: 'rgba(245,239,227,.6)', marginTop: 4 }}>
                  {stat.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
