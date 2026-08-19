import type { CSSProperties } from 'react'
import DraftLabel from './DraftLabel'

const statCardStyle: CSSProperties = {
  background: '#F7F7F8',
  borderRadius: 16,
  padding: '20px 24px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export default function DraftB() {
  return (
    <div id="1b" style={{ width: 900, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <DraftLabel
        code="1b"
        title="B안 · 모던 & 클린"
        desc="화이트 베이스 + 딥그린 #0E5C4A 포인트 · 산세리프(Pretendard) · 여백 많은 미니멀, 스타트업 친화적 무드"
      />
      <div
        style={{
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0,0,0,.10)',
          background: '#FFFFFF',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 48px',
            borderBottom: '1px solid rgba(112,115,124,.16)',
          }}
        >
          <div
            style={{ fontWeight: 700, fontSize: 18, color: '#171719', letterSpacing: '-.01em' }}
          >
            ○○세무회계
          </div>
          <div
            style={{
              display: 'flex',
              gap: 28,
              alignItems: 'center',
              fontSize: 14,
              color: '#46474C',
            }}
          >
            <span>서비스</span>
            <span>대표 소개</span>
            <span>FAQ</span>
            <span
              style={{
                background: '#0E5C4A',
                color: '#fff',
                fontWeight: 600,
                padding: '10px 20px',
                borderRadius: 10,
              }}
            >
              상담 신청
            </span>
          </div>
        </div>
        <div
          style={{
            padding: '96px 48px 104px',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(14,92,74,.08)',
                color: '#0E5C4A',
                fontSize: 13,
                fontWeight: 600,
                padding: '6px 14px',
                borderRadius: 999,
              }}
            >
              개인사업자 · 중소법인 전문
            </div>
            <h2
              style={{
                fontSize: 46,
                fontWeight: 700,
                color: '#171719',
                margin: '20px 0 0',
                lineHeight: 1.3,
                letterSpacing: '-.02em',
              }}
            >
              세금은 저희가,
              <br />
              대표님은 <span style={{ color: '#0E5C4A' }}>사업에만</span>
            </h2>
            <p style={{ margin: '18px 0 0', fontSize: 16, color: '#70737C', lineHeight: 1.7 }}>
              기장대리 · 세무신고 · 절세 컨설팅.
              <br />
              복잡한 세무, 가장 단순하게 맡기세요.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
              <span
                style={{
                  background: '#0E5C4A',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 15,
                  padding: '14px 28px',
                  borderRadius: 12,
                }}
              >
                무료 상담 신청
              </span>
              <span
                style={{
                  background: 'rgba(112,115,124,.08)',
                  color: '#171719',
                  fontWeight: 600,
                  fontSize: 15,
                  padding: '14px 28px',
                  borderRadius: 12,
                }}
              >
                카카오톡 문의
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={statCardStyle}>
              <span style={{ fontSize: 14, color: '#46474C' }}>세무 경력</span>
              <span style={{ fontSize: 22, fontWeight: 700, color: '#0E5C4A' }}>[N]년</span>
            </div>
            <div style={statCardStyle}>
              <span style={{ fontSize: 14, color: '#46474C' }}>관리 거래처</span>
              <span style={{ fontSize: 22, fontWeight: 700, color: '#0E5C4A' }}>[N]+</span>
            </div>
            <div style={{ ...statCardStyle, background: '#0E5C4A' }}>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,.8)' }}>첫 상담</span>
              <span style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>무료</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
