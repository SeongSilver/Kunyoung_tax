import { useState, type CSSProperties, type FormEvent } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { KAKAO_URL } from './data'

const fieldWrapStyle: CSSProperties = { display: 'flex', flexDirection: 'column', gap: 8 }
const labelStyle: CSSProperties = { fontSize: 14, fontWeight: 600, color: '#171719' }
const inputStyle: CSSProperties = {
  border: '1px solid rgba(112,115,124,.28)',
  borderRadius: 10,
  padding: '13px 14px',
  fontSize: 15,
  fontFamily: 'inherit',
  color: '#171719',
}

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const infoRef = useReveal()
  const formRef = useReveal<HTMLFormElement>()
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          phone: data.get('phone'),
          msg: data.get('msg'),
        }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => null)
        setErrorMsg(body?.error ?? '문의 접수에 실패했습니다. 잠시 후 다시 시도해 주세요.')
        setStatus('error')
        return
      }
      setStatus('sent')
      form.reset()
    } catch {
      setErrorMsg('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.')
      setStatus('error')
    }
  }

  return (
    <div
      id="contact"
      style={{
        padding: 'clamp(64px,12vw,104px) clamp(16px,4.5vw,24px)',
        background: '#F7F7F8',
      }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))',
          gap: 'clamp(40px,6vw,56px)',
        }}
      >
        <div ref={infoRef}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#0064FF' }}>CONTACT</div>
          <h2
            style={{
              fontSize: 'clamp(26px,4vw,34px)',
              fontWeight: 700,
              color: '#171719',
              margin: '10px 0 0',
              letterSpacing: '-.02em',
            }}
          >
            상담 문의
          </h2>
          <p style={{ fontSize: 16, color: '#70737C', lineHeight: 1.8, margin: '16px 0 0' }}>
            간단한 정보를 남겨주시면
            <br />
            빠르게 연락드리겠습니다.
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              marginTop: 32,
              fontSize: 15,
              color: '#171719',
            }}
          >
            <div>
              <strong style={{ color: '#0064FF', fontWeight: 700, marginRight: 10 }}>전화</strong>
              010-2763-8554 · 02-6052-8554
            </div>
            <div>
              <strong style={{ color: '#0064FF', fontWeight: 700, marginRight: 10 }}>팩스</strong>
              02-6052-8555
            </div>
            <div>
              <strong style={{ color: '#0064FF', fontWeight: 700, marginRight: 10 }}>메일</strong>
              hoon_tax@naver.com
            </div>
            <div>
              <strong style={{ color: '#0064FF', fontWeight: 700, marginRight: 10 }}>주소</strong>
              서울특별시 송파구 송파동 1905, 201호
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
            <a
              href="tel:010-2763-8554"
              style={{
                background: '#171719',
                color: '#fff',
                fontWeight: 600,
                fontSize: 15,
                padding: '13px 26px',
                borderRadius: 12,
                display: 'inline-block',
              }}
            >
              전화 걸기
            </a>
            <a
              href={KAKAO_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                background: '#FEE500',
                color: '#3C1E1E',
                fontWeight: 700,
                fontSize: 15,
                padding: '13px 26px',
                borderRadius: 12,
                display: 'inline-block',
              }}
            >
              카카오톡 상담
            </a>
          </div>
        </div>
        <form
          ref={formRef}
          onSubmit={submitForm}
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(112,115,124,.16)',
            borderRadius: 24,
            padding: 'clamp(24px,5vw,36px) clamp(18px,4.5vw,32px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
          }}
        >
          {status === 'sent' && (
            <div
              style={{
                background: 'rgba(0,100,255,.06)',
                border: '1px solid rgba(0,100,255,.3)',
                borderRadius: 12,
                padding: '14px 18px',
                fontSize: 15,
                color: '#171719',
              }}
            >
              문의가 접수되었습니다. 빠르게 연락드리겠습니다.
            </div>
          )}
          {status === 'error' && (
            <div
              style={{
                background: 'rgba(255,64,64,.06)',
                border: '1px solid rgba(255,64,64,.35)',
                borderRadius: 12,
                padding: '14px 18px',
                fontSize: 15,
                color: '#171719',
              }}
            >
              {errorMsg}
            </div>
          )}
          <div style={fieldWrapStyle}>
            <label style={labelStyle}>성함</label>
            <input required name="name" placeholder="홍길동" style={inputStyle} />
          </div>
          <div style={fieldWrapStyle}>
            <label style={labelStyle}>연락처</label>
            <input required name="phone" placeholder="010-0000-0000" style={inputStyle} />
          </div>
          <div style={fieldWrapStyle}>
            <label style={labelStyle}>문의 내용</label>
            <textarea
              required
              name="msg"
              rows={4}
              placeholder="기장대리 견적 문의드립니다."
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="lb-btn-primary"
            style={{
              color: '#fff',
              fontWeight: 600,
              fontSize: 16,
              padding: 15,
              borderRadius: 12,
              border: 'none',
              cursor: status === 'sending' ? 'default' : 'pointer',
              opacity: status === 'sending' ? 0.6 : 1,
              fontFamily: 'inherit',
            }}
          >
            {status === 'sending' ? '전송 중…' : '상담 신청하기'}
          </button>
        </form>
      </div>
    </div>
  )
}
