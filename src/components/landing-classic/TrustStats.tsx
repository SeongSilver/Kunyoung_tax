import type { CSSProperties } from 'react'
import { useCountUp } from '../../hooks/useCountUp'
import { CLIENT_COUNT, YEARS_EXP } from './data'

const numberStyle: CSSProperties = {
  fontFamily: "'Noto Serif KR',serif",
  fontSize: 36,
  fontWeight: 700,
  color: '#C3A15F',
}

const labelStyle: CSSProperties = {
  fontSize: 14,
  color: 'rgba(245,239,227,.6)',
  marginTop: 6,
}

export default function TrustStats() {
  const { ref, values } = useCountUp([YEARS_EXP, CLIENT_COUNT])
  const [years, clients] = values

  return (
    <div style={{ background: '#0F1D31', padding: '56px 24px' }}>
      <div
        ref={ref}
        style={{
          maxWidth: 820,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
          gap: 32,
          textAlign: 'center',
        }}
      >
        <div>
          <div style={numberStyle}>{years}년</div>
          <div style={labelStyle}>세무 실무 경력</div>
        </div>
        <div>
          <div style={numberStyle}>{clients}+</div>
          <div style={labelStyle}>관리 거래처</div>
        </div>
        <div>
          <div style={numberStyle}>100%</div>
          <div style={labelStyle}>대표 세무사 직접 상담</div>
        </div>
      </div>
    </div>
  )
}
