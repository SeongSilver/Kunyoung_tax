import { useReveal } from '../../hooks/useReveal'
import { EXPERTISE, type Expertise as ExpertiseData } from './data'

function ExpertiseCard({ expertise, index }: { expertise: ExpertiseData; index: number }) {
  const ref = useReveal(index)
  return (
    <div
      ref={ref}
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(112,115,124,.16)',
        borderRadius: 24,
        padding: '32px 28px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 12,
        }}
      >
        <h3 style={{ fontSize: 19, fontWeight: 700, color: '#171719', margin: 0, lineHeight: 1.4 }}>
          {expertise.title}
        </h3>
        {expertise.count && (
          <span
            style={{
              background: 'rgba(0,100,255,.08)',
              color: '#0064FF',
              fontSize: 13,
              fontWeight: 700,
              padding: '5px 12px',
              borderRadius: 999,
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {expertise.count}
          </span>
        )}
      </div>
      <ul
        style={{
          margin: '18px 0 0',
          padding: 0,
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        {expertise.items.map((item) => (
          <li key={item.h} style={{ fontSize: 14, lineHeight: 1.65, color: '#46474C' }}>
            <strong
              style={{ display: 'block', color: '#171719', fontWeight: 600, marginBottom: 2 }}
            >
              {item.h}
            </strong>
            {item.d}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Expertise() {
  const headRef = useReveal()
  return (
    <div id="expertise" style={{ padding: 'clamp(64px,12vw,104px) clamp(16px,4.5vw,24px)', background: '#F7F7F8' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div ref={headRef}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#0064FF' }}>CORE EXPERTISE</div>
          <h2
            style={{
              fontSize: 'clamp(26px,4vw,34px)',
              fontWeight: 700,
              color: '#171719',
              margin: '10px 0 0',
              letterSpacing: '-.02em',
            }}
          >
            핵심 전문 분야 및 수행 이력
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))',
            gap: 20,
            marginTop: 48,
          }}
        >
          {EXPERTISE.map((expertise, i) => (
            <ExpertiseCard key={expertise.title} expertise={expertise} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
