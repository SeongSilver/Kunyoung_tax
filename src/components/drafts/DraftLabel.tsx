interface Props {
  code: string
  title: string
  desc: string
}

export default function DraftLabel({ code, title, desc }: Props) {
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'baseline', flexWrap: 'wrap' }}>
      <span
        style={{
          background: '#171719',
          color: '#fff',
          fontSize: 13,
          fontWeight: 700,
          padding: '4px 10px',
          borderRadius: 6,
        }}
      >
        {code}
      </span>
      <strong style={{ fontSize: 17, color: '#171719' }}>{title}</strong>
      <span style={{ fontSize: 14, color: '#46474C' }}>{desc}</span>
    </div>
  )
}
