export const KAKAO_URL = 'http://pf.kakao.com/_채널ID/chat'

export const STAT_SUCCESSION = 200
export const STAT_TRANSFER = 70
export const STAT_CORP = 20

export interface Service {
  num: string
  title: string
  desc: string
}

export const SERVICES: Service[] = [
  {
    num: '01',
    title: '양도·상속·증여 컨설팅',
    desc: '사전 증여 플랜부터 양도소득세 신고까지, 자산 이전의 모든 단계를 정밀하게 설계합니다.',
  },
  {
    num: '02',
    title: '장부 기장 및 신고대리',
    desc: '월별 장부 작성과 부가가치세·종합소득세·법인세 신고를 기한 내 정확하게 처리합니다.',
  },
  {
    num: '03',
    title: '세무조사 대응',
    desc: '과세예고통지·소명 안내문 대응과 세무조사 입회로 리스크를 사전에 차단합니다.',
  },
  {
    num: '04',
    title: '경정청구 및 조세불복',
    desc: '과세전적부심사, 이의신청 등으로 억울한 세금 추징을 방어하고 잘못 낸 세금을 돌려받습니다.',
  },
]

export interface ExpertiseItem {
  h: string
  d: string
}

export interface Expertise {
  title: string
  count: string
  items: ExpertiseItem[]
}

export const EXPERTISE: Expertise[] = [
  {
    title: '① 상속세 & 증여세 자산승계 컨설팅',
    count: '누적 200+건',
    items: [
      {
        h: '사전 증여 및 상속세 플래닝',
        d: '10년 단위 증여 플랜, 부동산·비상장주식 사전증여 및 가업상속공제 컨설팅',
      },
      {
        h: '고액 자산가 상속세 신고 및 세무조사 입회',
        d: '세무서 및 지방국세청 상속세 세무조사 리스크 사전 차단 및 성공적 소명',
      },
    ],
  },
  {
    title: '② 부동산 양도소득세 & 재개발·재건축 전문',
    count: '누적 70+건',
    items: [
      {
        h: '재개발·재건축 입주권/분양권',
        d: '조합원 환급금, 1+1 입주권 양도세 계산, 권리가액 및 분담금 정밀 분석',
      },
      {
        h: '고가주택·복합 부동산 절세',
        d: '대치·반포 등 주요 상급지 거주주택 비과세, 일시적 2주택/대체주택 비과세 특례',
      },
    ],
  },
  {
    title: '③ 법인 세무 & 지분 구조화 컨설팅',
    count: '누적 20+건',
    items: [
      {
        h: '부동산 법인 및 가족법인',
        d: '꼬마빌딩 취득/운영을 위한 가족법인 전환 및 설립 컨설팅',
      },
      {
        h: '지분 이동 & 자본거래',
        d: '비상장주식 평가, 주식이전, 불균등증자 세무 리스크 진단 및 세무 소명 대응',
      },
    ],
  },
  {
    title: '④ 세무조사 대응 & 조세불복·소명',
    count: '',
    items: [
      {
        h: '국세청 과세예고통지 및 소명 안내문 대응',
        d: '억울한 세금 추징을 사전에 방어합니다.',
      },
      {
        h: '과세전적부심사 · 이의신청',
        d: '조세불복 절차 대리와 성공적 소명 대응',
      },
    ],
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
  { num: '4', title: '업무 수행', desc: '전담 관리가 시작됩니다. 신고와 세금 일정은 이제 저희가 챙깁니다.' },
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
