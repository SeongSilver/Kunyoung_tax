import DraftA from './DraftA'
import DraftB from './DraftB'
import DraftC from './DraftC'

export default function DraftShowcase() {
  return (
    <div
      style={{
        background: '#ECEDEF',
        minHeight: '100vh',
        fontFamily: "'Pretendard Variable',Pretendard,'Noto Sans KR',sans-serif",
      }}
    >
      <section style={{ padding: 48, display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div style={{ maxWidth: 720 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#70737C', letterSpacing: '.08em' }}>
            TURN 1 — 히어로 시안 3종
          </div>
          <h1 style={{ margin: '8px 0 0', fontSize: 26, fontWeight: 700, color: '#171719' }}>
            세무회계사무소 랜딩페이지 · 디자인 방향 시안
          </h1>
          <p style={{ margin: '8px 0 0', fontSize: 15, color: '#46474C', lineHeight: 1.6 }}>
            아래 3가지 중 하나를 선택하시면 그 방향으로 전체 페이지를 완성합니다.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <DraftA />
          <DraftB />
          <DraftC />
        </div>
      </section>
    </div>
  )
}
