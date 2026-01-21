import { useEffect, useRef, useState } from "react"
import type { RefObject } from "react"

export function useOnScreen<T extends HTMLElement>(
  options?: IntersectionObserverInit
): [RefObject<T | null>, boolean] {

  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      options
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}