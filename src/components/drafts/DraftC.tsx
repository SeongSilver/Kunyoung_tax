import type { CSSProperties } from 'react'
import DraftLabel from './DraftLabel'

const statCardStyle: CSSProperties = {
  background: '#fff',
  borderRadius: 20,
  padding: '18px 28px',
  boxShadow: '0 2px 12px rgba(74,59,46,.08)',
}

export default function DraftC() {
  return (
    <div id="1c" style={{ width: 900, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <DraftLabel
        code="1c"
        title="C안 · 따뜻함 & 친근"
        desc="베이지 #F6F1E8 + 웜브라운 #8A6A4F · 부드러운 바탕체 헤딩(Gowun Batang) · 문턱 낮은 동네 상담소 무드"
      />
      <div
        style={{
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0,0,0,.10)',
          background: '#F6F1E8',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 48px',
          }}
        >
          <div
            style={{
              fontFamily: "'Gowun Batang',serif",
              fontWeight: 700,
              fontSize: 19,
              color: '#4A3B2E',
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
              color: '#7A6C5D',
            }}
          >
            <span>서비스</span>
            <span>대표 소개</span>
            <span>FAQ</span>
            <span
              style={{
                background: '#8A6A4F',
                color: '#fff',
                fontWeight: 600,
                padding: '10px 22px',
                borderRadius: 999,
              }}
            >
              상담 신청
            </span>
          </div>
        </div>
        <div style={{ padding: '80px 48px 88px', textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-block',
              background: '#fff',
              border: '1px solid rgba(138,106,79,.25)',
              color: '#8A6A4F',
              fontSize: 13,
              fontWeight: 600,
              padding: '8px 18px',
              borderRadius: 999,
            }}
          >
            처음이라도 괜찮아요, 편하게 물어보세요
          </div>
          <h2
            style={{
              fontFamily: "'Gowun Batang',serif",
              fontSize: 42,
              fontWeight: 700,
              color: '#4A3B2E',
              margin: '24px 0 0',
              lineHeight: 1.45,
            }}
          >
            세금 걱정 없이,
            <br />
            마음 편한 사업 하세요
          </h2>
          <p style={{ margin: '18px 0 0', fontSize: 16, color: '#7A6C5D', lineHeight: 1.7 }}>
            어려운 세무 용어 대신 쉬운 말로 설명해 드립니다.
            <br />
            커피 한 잔 하며 이야기 나누듯 상담하세요.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32 }}>
            <span
              style={{
                background: '#8A6A4F',
                color: '#fff',
                fontWeight: 600,
                fontSize: 15,
                padding: '14px 32px',
                borderRadius: 999,
              }}
            >
              무료 상담 신청
            </span>
            <span
              style={{
                background: '#FEE500',
                color: '#3C1E1E',
                fontWeight: 600,
                fontSize: 15,
                padding: '14px 32px',
                borderRadius: 999,
              }}
            >
              카톡으로 물어보기
            </span>
          </div>
          <div style={{ marginTop: 52, display: 'inline-flex', gap: 16 }}>
            {[
              { v: '[N]년', l: '함께한 시간' },
              { v: '[N]+', l: '함께하는 사장님' },
              { v: '쉬운 말', l: '어려운 용어 없이' },
            ].map((stat) => (
              <div key={stat.l} style={statCardStyle}>
                <div style={{ fontSize: 22, fontWeight: 700, color: '#8A6A4F' }}>{stat.v}</div>
                <div style={{ fontSize: 13, color: '#7A6C5D', marginTop: 2 }}>{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
