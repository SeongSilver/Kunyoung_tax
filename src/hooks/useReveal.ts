import { useEffect, useRef } from 'react'

/** 스크롤 진입 시 fade-up 애니메이션 (원본 data-reveal / data-stagger 동작 이식) */
export function useReveal<T extends HTMLElement = HTMLDivElement>(stagger = 0) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    const delay = stagger * 120
    el.style.transition = `opacity .6s ease ${delay}ms, transform .6s ease ${delay}ms`

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.style.opacity = '1'
            target.style.transform = 'translateY(0)'
            io.unobserve(target)
          }
        })
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [stagger])

  return ref
}
