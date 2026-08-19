/** 상담 문의 섹션으로 스무스 스크롤 (헤더 높이만큼 오프셋) */
export function goContact() {
  const el = document.getElementById('contact')
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 70,
      behavior: 'smooth',
    })
  }
}
