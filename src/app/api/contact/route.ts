const MAX_LEN = { name: 50, phone: 30, msg: 2000 } as const

function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const name = clean(body?.name, MAX_LEN.name)
  const phone = clean(body?.phone, MAX_LEN.phone)
  const msg = clean(body?.msg, MAX_LEN.msg)

  if (!name || !phone || !msg) {
    return Response.json({ error: '성함, 연락처, 문의 내용을 모두 입력해 주세요.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  if (!apiKey || !to) {
    console.error('contact: RESEND_API_KEY 또는 CONTACT_TO_EMAIL 환경변수가 없습니다.')
    return Response.json({ error: '메일 발송 설정이 아직 완료되지 않았습니다.' }, { status: 500 })
  }

  // Resend 통합이 주입한 발신 도메인(kunyoungtax.co.kr). DNS 인증 완료 전에는 발송이 거부됨
  const domain = process.env.RESEND_EMAIL_DOMAIN
  const from =
    process.env.CONTACT_FROM_EMAIL ||
    (domain ? `건영세무회계 홈페이지 <noreply@${domain}>` : '건영세무회계 홈페이지 <onboarding@resend.dev>')

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `[홈페이지 상담신청] ${name}님 (${phone})`,
      text: `성함: ${name}\n연락처: ${phone}\n\n문의 내용:\n${msg}`,
    }),
  })

  if (!res.ok) {
    console.error('contact: Resend 발송 실패', res.status, await res.text())
    return Response.json({ error: '메일 발송에 실패했습니다. 잠시 후 다시 시도해 주세요.' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
