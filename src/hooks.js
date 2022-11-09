import { useRef, useEffect, useState } from 'react'
import { $fetch } from 'ohmyfetch'

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

export function useApi (config) {
  const [data, setData] = useState(null)

  useEffect(() => {
    const { query, url } = config
    $fetch(url, { query }).then(response => {
      console.log(response)
      setData(response)
    })
  }, [])

  return data
}
