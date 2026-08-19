import { useReveal } from '../../hooks/useReveal'
import { STEPS, type Step } from './data'

function StepCard({ step, index }: { step: Step; index: number }) {
  const ref = useReveal(index)
  return (
    <div
      ref={ref}
      style={{
        border: '1px solid rgba(255,255,255,.14)',
        borderRadius: 12,
        padding: '28px 24px',
      }}
    >
      <div
        style={{
          fontFamily: "'Noto Serif KR',serif",
          fontSize: 15,
          color: '#C3A15F',
          fontWeight: 700,
          letterSpacing: '.1em',
        }}
      >
        STEP {step.num}
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#F5EFE3', margin: '12px 0 0' }}>
        {step.title}
      </h3>
      <p
        style={{
          fontSize: 14,
          color: 'rgba(245,239,227,.62)',
          lineHeight: 1.7,
          margin: '8px 0 0',
        }}
      >
        {step.desc}
      </p>
    </div>
  )
}

export default function Process() {
  const headRef = useReveal()
  return (
    <div id="process" style={{ padding: '104px 24px', background: '#14263F' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div ref={headRef} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 13, letterSpacing: '.28em', color: '#C3A15F', fontWeight: 600 }}>
            PROCESS
          </div>
          <h2
            style={{
              fontFamily: "'Noto Serif KR',serif",
              fontSize: 'clamp(26px,4vw,34px)',
              fontWeight: 700,
              color: '#F5EFE3',
              margin: '14px 0 0',
            }}
          >
            진행 절차
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))',
            gap: 20,
            marginTop: 56,
          }}
        >
          {STEPS.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
