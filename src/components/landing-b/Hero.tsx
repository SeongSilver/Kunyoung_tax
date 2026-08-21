import { useEffect, useState, type CSSProperties } from 'react'
import { goContact } from '../../utils/goContact'
import { CASES, KAKAO_URL } from './data'

const TICKER_VISIBLE = 6
const TICKER_HOLD_MS = 1800
const TICKER_SLIDE_MS = 500
const TICKER_ROW_HEIGHT = 42

const tickerRowStyle: CSSProperties = {
  height: TICKER_ROW_HEIGHT,
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  fontSize: 15,
  color: '#46474C',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
}

/** 사례가 한 줄씩 위로 올라가는 수직 티커 (한 번에 TICKER_VISIBLE개 표시) */
function CaseTicker() {
  const [idx, setIdx] = useState(0)
  const [sliding, setSliding] = useState(false)

  useEffect(() => {
    const start = setTimeout(() => setSliding(true), TICKER_HOLD_MS)
    const done = setTimeout(() => {
      setSliding(false)
      setIdx((i) => (i + 1) % CASES.length)
    }, TICKER_HOLD_MS + TICKER_SLIDE_MS)
    return () => {
      clearTimeout(start)
      clearTimeout(done)
    }
  }, [idx])

  // 보이는 줄 + 아래에서 새로 올라올 줄 하나
  const rows = Array.from(
    { length: TICKER_VISIBLE + 1 },
    (_, i) => CASES[(idx + i) % CASES.length],
  )

  return (
    <div
      style={{
        background: '#F7F7F8',
        borderRadius: 16,
        padding: '24px 26px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 14,
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 600, color: '#171719' }}>실제 진행 사례</span>
        <span style={{ fontSize: 13, color: '#989BA2' }}>누적 300+ 건</span>
      </div>
      <div
        style={{
          height: TICKER_VISIBLE * TICKER_ROW_HEIGHT,
          overflow: 'hidden',
          maskImage:
            'linear-gradient(to bottom, transparent 0, #000 24px, #000 calc(100% - 24px), transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0, #000 24px, #000 calc(100% - 24px), transparent 100%)',
        }}
      >
        <div
          style={{
            transform: sliding ? `translateY(-${TICKER_ROW_HEIGHT}px)` : 'translateY(0)',
            transition: sliding
              ? `transform ${TICKER_SLIDE_MS}ms cubic-bezier(.45,0,.2,1)`
              : 'none',
          }}
        >
          {rows.map((text, i) => (
            <div key={`${idx}-${i}`} style={tickerRowStyle}>
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: '#C2C4C8',
                  flexShrink: 0,
                }}
              />
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
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
          style={{
            maxWidth: 420,
            justifySelf: 'end',
            width: '100%',
          }}
        >
          <CaseTicker />
        </div>
      </div>
    </div>
  )
}
