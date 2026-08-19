import { useState } from 'react'
import DraftShowcase from './components/drafts/DraftShowcase'
import LandingB from './components/landing-b/LandingB'
import LandingClassic from './components/landing-classic/LandingClassic'

type View = 'landing-b' | 'landing-classic' | 'drafts'

const VIEWS: { key: View; label: string }[] = [
  { key: 'landing-b', label: '랜딩 B안' },
  { key: 'landing-classic', label: '랜딩 A안' },
  { key: 'drafts', label: '시안 3종' },
]

function App() {
  const [view, setView] = useState<View>('landing-b')

  return (
    <>
      {view === 'landing-b' && <LandingB />}
      {view === 'landing-classic' && <LandingClassic />}
      {view === 'drafts' && <DraftShowcase />}

      {/* 디자인 시안 전환 스위처 */}
      <div
        style={{
          position: 'fixed',
          left: 24,
          bottom: 24,
          zIndex: 70,
          display: 'flex',
          gap: 4,
          background: 'rgba(23,23,25,.88)',
          backdropFilter: 'blur(8px)',
          borderRadius: 999,
          padding: 4,
          boxShadow: '0 4px 16px rgba(0,0,0,.18)',
        }}
      >
        {VIEWS.map((v) => (
          <button
            key={v.key}
            onClick={() => setView(v.key)}
            style={{
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: 13,
              fontWeight: 600,
              padding: '8px 14px',
              borderRadius: 999,
              background: view === v.key ? '#fff' : 'transparent',
              color: view === v.key ? '#171719' : 'rgba(255,255,255,.75)',
              transition: 'background .15s ease, color .15s ease',
            }}
          >
            {v.label}
          </button>
        ))}
      </div>
    </>
  )
}

export default App
