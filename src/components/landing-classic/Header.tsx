import { goContact } from '../../utils/goContact'

export default function Header() {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(20,38,63,.97)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255,255,255,.10)',
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '16px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: "'Noto Serif KR',serif",
            fontWeight: 700,
            fontSize: 19,
            color: '#F5EFE3',
            whiteSpace: 'nowrap',
          }}
        >
          건영세무회계
        </a>
        <nav
          style={{
            display: 'flex',
            gap: 26,
            alignItems: 'center',
            fontSize: 14,
            color: 'rgba(245,239,227,.78)',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
          }}
        >
          <a href="#services">서비스</a>
          <a href="#about">대표 소개</a>
          <a href="#process">진행 절차</a>
          <a href="#faq">FAQ</a>
          <button
            onClick={goContact}
            className="lc-btn-gold"
            style={{
              color: '#14263F',
              fontWeight: 700,
              fontSize: 14,
              padding: '10px 22px',
              borderRadius: 4,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            상담 신청
          </button>
        </nav>
      </div>
    </div>
  )
}
