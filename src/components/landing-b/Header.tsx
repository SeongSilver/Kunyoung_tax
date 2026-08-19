import logo from '../../assets/logo.png'
import { goContact } from '../../utils/goContact'

export default function Header() {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(255,255,255,.94)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(112,115,124,.16)',
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <a href="#top" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="건영세무회계" style={{ height: 32, display: 'block' }} />
        </a>
        <nav
          style={{
            display: 'flex',
            gap: 26,
            alignItems: 'center',
            fontSize: 14,
            color: '#46474C',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
          }}
        >
          <a href="#services">서비스</a>
          <a href="#about">대표 소개</a>
          <a href="#expertise">전문 분야</a>
          <a href="#process">진행 절차</a>
          <a href="#faq">FAQ</a>
          <button
            onClick={goContact}
            className="lb-btn-primary"
            style={{
              color: '#fff',
              fontWeight: 600,
              fontSize: 14,
              padding: '10px 22px',
              borderRadius: 10,
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
