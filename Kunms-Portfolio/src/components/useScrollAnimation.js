import { useRef, useEffect, useState } from 'react'

// Usage: const [visible, ref] = useScrollAnimation()
export function useScrollAnimation(options = { threshold: 0.2 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      options
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [ref, options])

  return [visible, ref]
}
