import React, { useEffect, useRef, useState } from 'react'

import { useGeez } from './useGeez'
import { useEventListener, useApi } from './hooks'

const Entry = () => {
  const [output, setOutput] = useGeez()
  const [hasValue, setHasValue] = useState(false)
  const inputRef = useRef(null)
  const [currentWord, setCurrentWord] = useState('')
  const [selectIndex, setSelectIndex] = useState(0)
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (output) {
      setSelectIndex(0)
      setCurrentWord(output[0])
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
    setCurrentWord(word)
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
    setCurrentWord('')
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
        setCurrentWord(value)
      }
    } else if (e.key === 'Escape') {
      clearUserInput()
    }

    if (e.key.match(/^[\w|-]$/) && !e.metaKey && !e.ctrlKey && !e.altKey && !e.shiftKey) {
      inputRef.current.focus()
    }
  })

  const moveIndex = (delta) => {
    setSelectIndex((selectIndex + delta + output.length) % output.length)
  }

  const data = useApi({
    method: 'GET',
    url: 'http://mermru.com/dictionary/',
    query: {
      q: 'በርሀ',
      search: ''
    }
  })

  console.log(data)

  return (
    <div className='grid lg:cols-2 gap-2 h-full of-hidden px-8' grid="~ lg:cols-2">
      <div className='h-full grid grid-rows-[min-content_min-content_1fr] of-hidden'>
        <div className='row text-left py4 pr1 items-center'>
          <h1>
            <span className='font-400 text-lg leading-1em block'>Type Geez/Tigrinya</span>
          </h1>
          <div className='flex-auto'></div>

          <div className='row gap4 text-lg text-gray4 items-center'>
            <a className='i-carbon-logo-github' href="https://github.com/yonashailug/typegeez" rel="noopener noreferrer" title="GitHub" target="_blank" aria-label="GitHub"></a>
          </div>
        </div>

        <div className='border border-rounded border-base font-200 text-2xl shadow relative'>
          <input type={'text'}
              ref={inputRef}
              onChange={handleUserTyping}
              placeholder='Type something here'
              aria-label="Type something here"
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
        {currentWord && <div>
          <h2 className='text-3xl font-light'>{currentWord + ' '}
            <button
              className={(!isCopied ? 'i-carbon-copy ' : 'i-carbon-checkmark-outline text-green op100') + ' op50 w-4 h-4 hover:op-100 cursor-pointer ma'}
              title="Copy" onClick={() => copyToClipboard(currentWord)}></button>
          </h2>
          <div className='gap-4 text-left'>
            <div>
              <div className='op-30 mb-1'>Meaning</div>
              <div className='border border-base of-auto'>
                <div className='row flex-wrap gap-2 px-4 py-2 items-center'>
                  <div className='gap-1'>
                    <div className='row gap-2 items-center'>
                      <code className='text-hex-ab5e3f'>{currentWord}</code>
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
