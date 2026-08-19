import { useReveal } from '../../hooks/useReveal'
import { STEPS, type Step } from './data'

function StepCard({ step, index }: { step: Step; index: number }) {
  const ref = useReveal(index)
  return (
    <div ref={ref} style={{ background: '#F7F7F8', borderRadius: 24, padding: '28px 26px' }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: '#0064FF', letterSpacing: '.04em' }}>
        STEP {step.num}
      </div>
      <h3 style={{ fontSize: 18, fontWeight: 700, color: '#171719', margin: '12px 0 0' }}>
        {step.title}
      </h3>
      <p style={{ fontSize: 14, color: '#70737C', lineHeight: 1.7, margin: '8px 0 0' }}>
        {step.desc}
      </p>
    </div>
  )
}

export default function Process() {
  const headRef = useReveal()
  return (
    <div id="process" style={{ padding: 'clamp(64px,12vw,104px) clamp(16px,4.5vw,24px)', background: '#FFFFFF' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div ref={headRef}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#0064FF' }}>PROCESS</div>
          <h2
            style={{
              fontSize: 'clamp(26px,4vw,34px)',
              fontWeight: 700,
              color: '#171719',
              margin: '10px 0 0',
              letterSpacing: '-.02em',
            }}
          >
            진행 절차
          </h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(210px,100%),1fr))',
            gap: 20,
            marginTop: 48,
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
