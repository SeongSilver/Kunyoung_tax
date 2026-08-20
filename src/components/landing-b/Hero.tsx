import type { CSSProperties } from 'react'
import { useCountUp } from '../../hooks/useCountUp'
import { goContact } from '../../utils/goContact'
import { KAKAO_URL, STAT_CORP, STAT_SUCCESSION, STAT_TRANSFER } from './data'

const statCardStyle: CSSProperties = {
  background: '#F7F7F8',
  borderRadius: 16,
  padding: '22px 26px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const statLabelStyle: CSSProperties = { fontSize: 14, color: '#46474C' }
const statValueStyle: CSSProperties = { fontSize: 24, fontWeight: 700, color: '#0064FF' }

export default function Hero() {
  const { ref, values } = useCountUp([STAT_SUCCESSION, STAT_TRANSFER, STAT_CORP])
  const [stat1, stat2, stat3] = values

  return (
    <div
      id="top"
      style={{
        background: '#FFFFFF',
        padding: 'clamp(56px,12vw,112px) clamp(16px,4.5vw,24px) clamp(72px,13vw,120px)',
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))',
          gap: 'clamp(40px,6vw,56px)',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(0,100,255,.08)',
              color: '#0064FF',
              fontSize: 13,
              fontWeight: 600,
              padding: '6px 14px',
              borderRadius: 999,
            }}
          >
            세울 건(建) · 번영할 영(榮)
          </div>
          <h1
            style={{
              fontSize: 'clamp(34px,5vw,48px)',
              fontWeight: 700,
              color: '#171719',
              margin: '20px 0 0',
              lineHeight: 1.3,
              letterSpacing: '-.02em',
            }}
          >
            고객의 사업과 자산이
            <br />
            흔들림 없이 <span style={{ color: '#0064FF' }}>번영</span>하도록
          </h1>
          <p
            style={{
              margin: '18px 0 0',
              fontSize: 'clamp(15px,2vw,17px)',
              color: '#70737C',
              lineHeight: 1.75,
            }}
          >
            공학적 사고의 정밀한 데이터 분석과 자산세무 전문법인에서 축적한
            <br className="br-desktop" />
            300건 이상의 실전 경험으로, '고객 맞춤형 심층 절세 솔루션'을 제공합니다.
          </p>
          <div
            className="lb-hero-cta"
            style={{ display: 'flex', gap: 12, marginTop: 34, flexWrap: 'wrap' }}
          >
            <button
              onClick={goContact}
              className="lb-btn-primary"
              style={{
                color: '#fff',
                fontWeight: 600,
                fontSize: 16,
                padding: '15px 30px',
                borderRadius: 12,
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              상담 신청
            </button>
            <a
              href={KAKAO_URL}
              target="_blank"
              rel="noreferrer"
              className="lb-btn-ghost"
              style={{
                color: '#171719',
                fontWeight: 600,
                fontSize: 16,
                padding: '15px 30px',
                borderRadius: 12,
                display: 'inline-block',
                textAlign: 'center',
              }}
            >
              카카오톡 문의
            </a>
          </div>
        </div>
        <div
          ref={ref}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            maxWidth: 420,
            justifySelf: 'end',
            width: '100%',
          }}
        >
          <div style={statCardStyle}>
            <span style={statLabelStyle}>상속·증여 자산승계 컨설팅</span>
            <span style={statValueStyle}>{stat1}+건</span>
          </div>
          <div style={statCardStyle}>
            <span style={statLabelStyle}>재개발·재건축 등 양도세</span>
            <span style={statValueStyle}>{stat2}+건</span>
          </div>
          <div style={statCardStyle}>
            <span style={statLabelStyle}>법인 세무 및 컨설팅</span>
            <span style={statValueStyle}>{stat3}+건</span>
          </div>
          <div style={{ ...statCardStyle, background: '#0064FF' }}>
            <span style={{ fontSize: 14, color: 'rgba(255,255,255,.8)' }}>
              첫 상담 · 대표 세무사 직접
            </span>
            <span style={{ fontSize: 24, fontWeight: 700, color: '#fff' }}>상담 후 결정</span>
          </div>
        </div>
      </div>
    </div>
  )
}
