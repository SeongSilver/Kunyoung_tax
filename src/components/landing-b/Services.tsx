import { useReveal } from '../../hooks/useReveal'
import { SERVICES, type Service } from './data'

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useReveal(index)
  return (
    <div
      ref={ref}
      className="lb-card"
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(112,115,124,.16)',
        borderRadius: 24,
        padding: '32px 28px',
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: 'rgba(0,100,255,.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 16,
          fontWeight: 700,
          color: '#0064FF',
        }}
      >
        {service.num}
      </div>
      <h3 style={{ fontSize: 19, fontWeight: 700, color: '#171719', margin: '18px 0 0' }}>
        {service.title}
      </h3>
      <p style={{ fontSize: 15, color: '#70737C', lineHeight: 1.7, margin: '8px 0 0' }}>
        {service.desc}
      </p>
    </div>
  )
}

export default function Services() {
  const headRef = useReveal()
  return (
    <div id="services" style={{ padding: '104px 24px', background: '#F7F7F8' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div ref={headRef}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#0064FF', letterSpacing: '.02em' }}>
            SERVICES
          </div>
          <h2
            style={{
              fontSize: 'clamp(26px,4vw,34px)',
              fontWeight: 700,
              color: '#171719',
              margin: '10px 0 0',
              letterSpacing: '-.02em',
            }}
          >
            주력 서비스
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
            gap: 20,
            marginTop: 48,
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
