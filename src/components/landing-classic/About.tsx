import type { CSSProperties } from 'react'
import { useReveal } from '../../hooks/useReveal'
import ImageSlot from '../shared/ImageSlot'

const careerItemStyle: CSSProperties = {
  display: 'flex',
  gap: 12,
  alignItems: 'baseline',
  fontSize: 15,
  color: '#14263F',
}

const CAREERS = ['서울대학교 졸업', '前 삼성전자 DS 부문', '前 세무법인 다솔 본점']

export default function About() {
  const ref = useReveal()
  return (
    <div id="about" style={{ padding: '104px 24px', background: '#F7F5F0' }}>
      <div
        ref={ref}
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: 56,
          alignItems: 'center',
        }}
      >
        <div style={{ width: '100%', maxWidth: 380, aspectRatio: '3/3.6', margin: '0 auto' }}>
          <ImageSlot radius={8} placeholder="대표 세무사 사진" />
        </div>
        <div>
          <div style={{ fontSize: 13, letterSpacing: '.28em', color: '#C3A15F', fontWeight: 600 }}>
            REPRESENTATIVE
          </div>
          <h2
            style={{
              fontFamily: "'Noto Serif KR',serif",
              fontSize: 'clamp(26px,4vw,34px)',
              fontWeight: 700,
              color: '#14263F',
              margin: '14px 0 0',
            }}
          >
            조건훈 대표 세무사
          </h2>
          <p style={{ fontSize: 16, color: '#5B6472', lineHeight: 1.8, margin: '20px 0 0' }}>
            대기업 실무와 세무법인 경험을 두루 갖춘 세무 전문가로서, 개인사업자와 중소법인
            대표님의 상황에 맞는 실질적인 절세 방안을 제시합니다.
          </p>
          <ul
            style={{
              margin: '24px 0 0',
              padding: 0,
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {CAREERS.map((career) => (
              <li key={career} style={careerItemStyle}>
                <span style={{ color: '#C3A15F', fontWeight: 700 }}>·</span>
                {career}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
