import { useRef, useCallback } from 'react'

export const useDebounce = (cb, delay) => {
  const timer = useRef()

  return useCallback(
    (...args) => {
      clearTimeout(timer.current)
      timer.current = setTimeout(() => cb(...args), delay)
    },
    [cb, delay]
  )
}
