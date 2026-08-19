import { useReveal } from '../../hooks/useReveal'
import { SERVICES, type Service } from './data'

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useReveal(index)
  return (
    <div
      ref={ref}
      className="lc-card"
      style={{
        border: '1px solid rgba(112,115,124,.22)',
        borderRadius: 12,
        padding: '32px 28px',
        background: '#FFFFFF',
      }}
    >
      <div
        style={{
          fontFamily: "'Noto Serif KR',serif",
          fontSize: 22,
          color: '#C3A15F',
          fontWeight: 700,
        }}
      >
        {service.num}
      </div>
      <h3 style={{ fontSize: 19, fontWeight: 700, color: '#14263F', margin: '14px 0 0' }}>
        {service.title}
      </h3>
      <p style={{ fontSize: 15, color: '#5B6472', lineHeight: 1.7, margin: '10px 0 0' }}>
        {service.desc}
      </p>
    </div>
  )
}

export default function Services() {
  const headRef = useReveal()
  return (
    <div id="services" style={{ padding: '104px 24px', background: '#FFFFFF' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div ref={headRef} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 13, letterSpacing: '.28em', color: '#C3A15F', fontWeight: 600 }}>
            SERVICES
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
            주력 서비스
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
            gap: 24,
            marginTop: 56,
          }}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.num} service={service} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
