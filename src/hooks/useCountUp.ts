import { useEffect, useRef, useState } from 'react'

/** 뷰포트 진입 시 0 → 목표값 카운트업 (원본 _countUp 동작 이식) */
export function useCountUp<T extends HTMLElement = HTMLDivElement>(
  targets: number[],
  duration = 1400,
) {
  const ref = useRef<T>(null)
  const [values, setValues] = useState<number[]>(targets)
  const targetsRef = useRef(targets)
  targetsRef.current = targets
  const countedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !countedRef.current) {
          countedRef.current = true
          io.disconnect()
          const t0 = performance.now()
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / duration)
            const eased = 1 - Math.pow(1 - p, 3)
            setValues(targetsRef.current.map((t) => Math.round(t * eased)))
            if (p < 1) raf = requestAnimationFrame(tick)
          }
          raf = requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [duration])

  return { ref, values }
}
