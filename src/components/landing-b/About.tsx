import type { CSSProperties } from 'react'
import profile from '../../assets/profile.jpeg'
import { useReveal } from '../../hooks/useReveal'
import ImageSlot from '../shared/ImageSlot'

const careerItemStyle: CSSProperties = {
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  fontSize: 15,
  color: '#171719',
}

const dotStyle: CSSProperties = {
  width: 6,
  height: 6,
  borderRadius: '50%',
  background: '#0064FF',
  flexShrink: 0,
}

const CAREERS = [
  '서울대학교 바이오소재공학과 졸업',
  '前 삼성전자 DS부문',
  '前 세무법인 다솔 본점',
  '現 건영세무회계 대표 세무사',
]

export default function About() {
  const ref = useReveal()
  return (
    <div id="about" style={{ padding: '104px 24px', background: '#FFFFFF' }}>
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
        <div style={{ width: '100%', maxWidth: 380, aspectRatio: '3/4', margin: '0 auto' }}>
          <ImageSlot src={profile} radius={24} placeholder="대표 세무사 사진" />
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#0064FF' }}>REPRESENTATIVE</div>
          <h2
            style={{
              fontSize: 'clamp(26px,4vw,34px)',
              fontWeight: 700,
              color: '#171719',
              margin: '10px 0 0',
              letterSpacing: '-.02em',
            }}
          >
            조건훈 대표 세무사
          </h2>
          <p
            style={{
              fontSize: 17,
              fontWeight: 600,
              color: '#171719',
              lineHeight: 1.7,
              margin: '20px 0 0',
            }}
          >
            "세울 건(建), 번영할 영(榮)"
            <br />
            <span style={{ fontWeight: 400, color: '#46474C' }}>
              고객의 사업과 자산이 흔들림 없이 튼튼하게 세워지고 번영하도록 곁을 지키겠습니다.
            </span>
          </p>
          <p style={{ fontSize: 15, color: '#70737C', lineHeight: 1.8, margin: '16px 0 0' }}>
            공학적 사고를 통한 정밀한 데이터 분석력과 대한민국 대표 자산세무 전문법인(세무법인
            다솔 본점)에서 축적한 수백 건의 실전 경험을 결합하여, 형식적인 세무 처리가 아닌 '고객
            맞춤형 심층 절세 솔루션'을 제공합니다.
          </p>
          <ul
            style={{
              margin: '24px 0 0',
              padding: 0,
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            {CAREERS.map((career) => (
              <li key={career} style={careerItemStyle}>
                <span style={dotStyle} />
                {career}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
