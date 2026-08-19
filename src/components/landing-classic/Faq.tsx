import { useState } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { FAQS } from './data'

export default function Faq() {
  const headRef = useReveal()
  const listRef = useReveal()
  const [openFaq, setOpenFaq] = useState(-1)

  return (
    <div id="faq" style={{ padding: '104px 24px', background: '#FFFFFF' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div ref={headRef} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 13, letterSpacing: '.28em', color: '#C3A15F', fontWeight: 600 }}>
            FAQ
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
            자주 묻는 질문
          </h2>
        </div>
        <div
          ref={listRef}
          style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 12 }}
        >
          {FAQS.map((faq, i) => {
            const open = openFaq === i
            return (
              <div
                key={faq.q}
                style={{
                  border: '1px solid rgba(112,115,124,.22)',
                  borderRadius: 8,
                  overflow: 'hidden',
                }}
              >
                <button
                  onClick={() => setOpenFaq(open ? -1 : i)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 16,
                    fontFamily: 'inherit',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontSize: 16, fontWeight: 600, color: '#14263F' }}>{faq.q}</span>
                  <span style={{ fontSize: 20, color: '#C3A15F', fontWeight: 400, flexShrink: 0 }}>
                    {open ? '−' : '+'}
                  </span>
                </button>
                {open && (
                  <div
                    style={{
                      padding: '0 24px 20px',
                      fontSize: 15,
                      color: '#5B6472',
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
