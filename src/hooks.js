import { useRef, useEffect, useState, useCallback } from 'react'
import { $fetch } from 'ohmyfetch'

import TypeGeez from './TypeGeez'

const typeGeez = new TypeGeez()

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
      setData(response)
    })
  }, [])

  return data
}

export function useGeez () {
  const [value, setValue] = useState('')
  const [output, setOutput] = useState([])

  useEffect(() => {
    const results = []
    const values = value.split(' ').filter(item => item)
    values.forEach(item => {
      let result = []
      if (!isNaN(item)) {
        result.push([typeGeez.numbersToGeez(Number(item))])
      } else {
        typeGeez.getCharacterCombination(item.toLowerCase(), [], result)
      }
      results.push(result)
      result = []
    })

    let translated = []
    if (!isNaN(values[values.length - 1])) {
      translated = results[results.length - 1]
    } else {
      results[results.length - 1]?.forEach(item => {
        typeGeez.lookup([...item], [], translated)
      })
    }

    setOutput(translated.map(item => item.join('')))
  }, [value])

  const handleEvent = useCallback((newValue) => setValue(newValue), [])

  return [output, handleEvent]
}
