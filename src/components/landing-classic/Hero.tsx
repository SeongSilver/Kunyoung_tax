import { goContact } from '../../utils/goContact'

export default function Hero() {
  return (
    <div id="top" style={{ background: '#14263F', padding: '104px 24px 112px', textAlign: 'center' }}>
      <div style={{ maxWidth: 820, margin: '0 auto' }}>
        <div style={{ fontSize: 13, letterSpacing: '.32em', color: '#C3A15F', fontWeight: 600 }}>
          TAX &amp; ACCOUNTING
        </div>
        <h1
          style={{
            fontFamily: "'Noto Serif KR',serif",
            fontSize: 'clamp(30px,5vw,48px)',
            fontWeight: 700,
            color: '#F5EFE3',
            margin: '22px 0 0',
            lineHeight: 1.4,
          }}
        >
          숫자 너머의 신뢰,
          <br />
          사업의 든든한 동반자
        </h1>
        <p
          style={{
            margin: '20px 0 0',
            fontSize: 'clamp(15px,2vw,17px)',
            color: 'rgba(245,239,227,.7)',
            lineHeight: 1.75,
          }}
        >
          기장대리부터 절세 컨설팅까지,
          <br />
          삼성전자·세무법인 다솔 출신 세무사가 직접 책임집니다.
        </p>
        <div
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            marginTop: 38,
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={goContact}
            className="lc-btn-gold"
            style={{
              color: '#14263F',
              fontWeight: 700,
              fontSize: 16,
              padding: '15px 34px',
              borderRadius: 4,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            무료 상담 신청
          </button>
          <a
            href="#services"
            style={{
              border: '1px solid rgba(245,239,227,.4)',
              color: '#F5EFE3',
              fontSize: 16,
              padding: '15px 34px',
              borderRadius: 4,
              display: 'inline-block',
            }}
          >
            서비스 안내
          </a>
        </div>
      </div>
    </div>
  )
}
