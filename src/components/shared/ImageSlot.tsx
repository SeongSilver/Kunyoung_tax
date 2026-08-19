interface Props {
  src?: string
  alt?: string
  radius?: number
  placeholder?: string
}

/** 원본 <image-slot> 커스텀 엘리먼트 대체 컴포넌트 */
export default function ImageSlot({ src, alt = '', radius = 0, placeholder }: Props) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt || placeholder || ''}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: radius,
          display: 'block',
        }}
      />
    )
  }
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: radius,
        background: 'rgba(112,115,124,.10)',
        border: '1px dashed rgba(112,115,124,.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        color: '#70737C',
      }}
    >
      {placeholder}
    </div>
  )
}
