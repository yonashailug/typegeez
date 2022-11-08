import { useState, useCallback, useEffect } from 'react'
import TypeGeez from './TypeGeez'

const typeGeez = new TypeGeez()

function useGeez () {
  const [value, setValue] = useState('')
  const [output, setOutput] = useState([])
  const result = []
  const translated = []

  useEffect(() => {
    typeGeez.getCombination(value.toLowerCase(), [], result)

    result.forEach(item => {
      typeGeez.lookup([...item], [], translated)
    })

    setOutput(translated.map(item => item.join('')))
  }, [value])

  const handleEvent = useCallback((newValue) => setValue(newValue), [])

  return [output, handleEvent]
}

export {
  useGeez
}
