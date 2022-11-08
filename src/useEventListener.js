import { useRef, useEffect } from 'react'

export function useEventListener (eventName, handler, element = window) {
  const savedHandler = useRef()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    if (!(element && element.addEventListener)) return

    const eventListener = (event) => savedHandler.current(event)

    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, element])
}
