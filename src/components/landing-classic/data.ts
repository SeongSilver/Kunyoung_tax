export const KAKAO_URL = 'http://pf.kakao.com/_채널ID/chat'

export const YEARS_EXP = 10
export const CLIENT_COUNT = 200

export interface Service {
  num: string
  title: string
  desc: string
}

export const SERVICES: Service[] = [
  {
    num: '01',
    title: '기장대리',
    desc: '월별 장부 작성과 증빙 관리를 대행하여 투명한 재무 흐름을 만들어 드립니다.',
  },
  {
    num: '02',
    title: '세무신고',
    desc: '부가가치세·종합소득세·법인세 신고를 기한 내 정확하게 처리합니다.',
  },
  {
    num: '03',
    title: '절세 컨설팅',
    desc: '사업 구조와 지출 패턴을 분석해 합법적인 절세 전략을 설계합니다.',
  },
  {
    num: '04',
    title: '사업자등록',
    desc: '개인·법인 설립과 사업자등록, 업종별 인허가까지 창업의 시작을 돕습니다.',
  },
]

export interface Step {
  num: string
  title: string
  desc: string
}

export const STEPS: Step[] = [
  { num: '1', title: '상담', desc: '전화 또는 카카오톡으로 사업 현황과 고민을 편하게 말씀해 주세요.' },
  { num: '2', title: '견적', desc: '업종과 규모에 맞는 서비스 범위와 합리적인 수임료를 안내해 드립니다.' },
  { num: '3', title: '계약', desc: '위임 계약 체결과 함께 기존 자료 이관을 저희가 직접 처리합니다.' },
  { num: '4', title: '기장 시작', desc: '전담 관리가 시작됩니다. 세금 일정은 이제 저희가 챙깁니다.' },
]

export interface FaqItem {
  q: string
  a: string
}

export const FAQS: FaqItem[] = [
  {
    q: '기장료는 얼마인가요?',
    a: '업종, 매출 규모, 거래량에 따라 달라집니다. 상담 시 사업 현황을 알려주시면 합리적인 견적을 안내해 드립니다.',
  },
  {
    q: '세무사를 처음 쓰는데 무엇을 준비해야 하나요?',
    a: '사업자등록증과 홈택스 아이디만 있으면 시작할 수 있습니다. 나머지 서류 정리는 저희가 안내해 드립니다.',
  },
  {
    q: '기존 세무사에서 옮기는 절차가 복잡한가요?',
    a: '아닙니다. 위임장 작성 후 자료 이관까지 저희가 직접 처리하므로 대표님은 별도로 하실 일이 거의 없습니다.',
  },
  {
    q: '방문 없이 비대면으로도 가능한가요?',
    a: '가능합니다. 전화, 카카오톡, 이메일로 자료를 주고받으며 전국 어디서든 기장과 신고를 진행할 수 있습니다.',
  },
]
