import React, { useEffect, useRef, useState } from 'react'
import { version } from './../package.json'

import { useGeez, useEventListener } from './hooks'

const Entry = () => {
  const [output, setOutput] = useGeez()
  const [previousOutput, setPreviousOutput] = useState('')
  const [hasValue, setHasValue] = useState(false)
  const inputRef = useRef(null)
  const [selectIndex, setSelectIndex] = useState(0)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (output.length) {
      setSelectIndex(0)
    }
  }, [output])

  const handleUserTyping = () => {
    const value = inputRef.current.value
    if (!value) {
      clearUserInput()
      return
    }

    setHasValue(true)
    setOutput(value)
  }

  const handleSelectItem = (word, idx) => {
    setSelectIndex(idx)
    const values = inputRef.current.value.trim().split(/[\s]/)
    const prevValues = previousOutput.trim().split(/[\s]/)

    if (prevValues.length >= values.length) {
      prevValues[prevValues.length - 1] = word
      setPreviousOutput(prevValues.join(' '))
    } else {
      setPreviousOutput(previousOutput + ' ' + word)
    }
  }

  const copyToClipboard = (word) => {
    setIsCopied(true)
    navigator.clipboard.writeText(word)
    setTimeout(setIsCopied, 2000, false)
  }

  const clearUserInput = () => {
    inputRef.current.value = ''
    setOutput('')
    setHasValue(false)
    setPreviousOutput('')
    setSelectIndex(0)
    inputRef.current.focus()
  }

  useEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      moveIndex(1)
      e.preventDefault()
    } else if (e.key === 'ArrowUp') {
      moveIndex(-1)
      e.preventDefault()
    } else if (e.key === 'Enter') {
      const value = output.at(selectIndex)
      if (value) {
        handleSelectItem(value, selectIndex)
      }
    } else if (e.key === 'Escape') {
      clearUserInput()
    } else if (e.code === 'Space') {
      if (output.length && selectIndex === 0) {
        handleSelectItem(output[0], selectIndex)
      }
    }

    if (e.key.match(/^[\w|-]$/) && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
      inputRef.current.focus()
    }
  })

  const moveIndex = (delta) => {
    setSelectIndex((selectIndex + delta + output.length) % output.length)
  }

  // TOD: - CORS issues, fix me
  // const data = useApi({
  //   method: 'GET',
  //   url: 'http://mermru.com/dictionary/',
  //   query: {
  //     q: 'በርሀ',
  //     search: ''
  //   }
  // })

  return (
    <div className='grid lg:cols-2 gap-2 h-full of-hidden px-8' grid="~ lg:cols-2">
      <div className='h-full grid grid-rows-[min-content_min-content_1fr] of-hidden'>
        <div className='row text-left py4 pr1 items-center'>
          <h1>
            <span className='font-400 text-lg leading-1em block'>Type Geez/Tigrinya</span>
          </h1>
          <div className='text-xs op-30 ml-2 self-end leading-12px'> v{version}</div>
          <div className='flex-auto'></div>

          <div className='row gap4 text-lg text-gray4 items-center'>
            <a className='i-carbon-logo-github' href="https://github.com/yonashailug/typegeez" rel="noopener noreferrer" title="GitHub" target="_blank" aria-label="GitHub"></a>
          </div>
        </div>

        <div className='border border-rounded border-base font-200 text-2xl shadow relative'>
          <input type={'text'}
              ref={inputRef}
              onChange={handleUserTyping}
              placeholder='Type any word here'
              aria-label="Type any word here"
              autoComplete="off"
              className='b-1 px-6 py-4 border-none w-full bg-transparent !outline-none'
              />
          {hasValue && <button onClick={clearUserInput} className='absolute flex right-2 w-10 top-2 bottom-2 text-xl op30 hover:op90' aria-label="Clear search">
            <span className='i-carbon-close ma block' aria-hidden="true"></span>
          </button>}
        </div>
        {(output && !!output?.length) && <div className='mx-2 border-r border-l border-b border-base of-auto'>
          {output.map((item, idx) => (
          <div key={item + idx}>
            <div key={item + idx} onClick={() => handleSelectItem(item, idx)} className={(selectIndex === idx ? 'bg-gray5:6' : 'op60') + ' row gap-3 row px-3 py-2 border-transparent border-l-4 items-center text-left cursor-pointer select-none hover:bg-gray5:2 hover:op100'}>
              <div>
                <code>{item}</code>
              </div>
            </div>
            <div className='divider'></div>
          </div>))}
        </div>}
      </div>
      <div className='py-8 px-8 of-auto h-full'>
        {previousOutput && <div>
          <h2 className='text-3xl font-light'>{previousOutput}
            <button
              className={(!isCopied ? 'i-carbon-copy ' : 'i-carbon-checkmark-outline text-green op100') + ' op50 w-4 h-4 hover:op-100 cursor-pointer ma'}
              title="Copy" onClick={() => copyToClipboard(previousOutput)}></button>
          </h2>
          <div className='gap-4 text-left'>
            <div>
              <div className='op-30 mb-1'>Meaning</div>
              <div className='border border-base of-auto'>
                <div className='row flex-wrap gap-2 px-4 py-2 items-center'>
                  <div className='gap-1'>
                    <div className='row gap-2 items-center'>
                      <code className='text-hex-ab5e3f'>{previousOutput}</code>
                    </div>
                    <div className='flex-auto'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Entry
