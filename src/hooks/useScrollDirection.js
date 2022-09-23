import { useState } from "react"
import useThrottledCallback from "beautiful-react-hooks/useThrottledCallback"
import { useEventListener } from "./useEventListener"

/**
 * @desc Custom hook to determine the direction of Y scroll
 * @param {string} initialDirection - initialDirection value, oneOf(['up', 'down'])
 */

const useScrollDirection = initialDirection => {
  const [lastScrollPos, setLastScrollPos] = useState(0)
  const [direction, setDirection] = useState(initialDirection)
  const hadndleDirectionChange = useThrottledCallback(() => {
    if (lastScrollPos > window.pageYOffset) {
      setDirection("up")
    } else {
      setDirection("down")
    }
    setLastScrollPos(window.pageYOffset)
  }, [lastScrollPos, setDirection, setLastScrollPos, window.pageYOffset], 200)

  useEventListener("scroll", hadndleDirectionChange)

  if (typeof window === "undefined") return ["up", 0]

  return [direction, window.pageYOffset]
}

export { useScrollDirection }
