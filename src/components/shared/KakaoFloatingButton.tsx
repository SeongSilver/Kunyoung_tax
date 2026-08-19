interface Props {
  href: string
}

export default function KakaoFloatingButton({ href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="카카오톡 상담"
      className="kakao-float"
      style={{
        position: 'fixed',
        right: 24,
        bottom: 24,
        zIndex: 60,
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: '#FEE500',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'kakaoPulse 2.4s ease-out infinite',
        boxShadow: '0 4px 16px rgba(0,0,0,.18)',
      }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="#3C1E1E">
        <path d="M12 3C6.48 3 2 6.54 2 10.9c0 2.8 1.86 5.26 4.66 6.65l-.95 3.51c-.08.31.27.56.54.38l4.19-2.78c.51.06 1.03.09 1.56.09 5.52 0 10-3.54 10-7.85S17.52 3 12 3z" />
      </svg>
    </a>
  )
}
