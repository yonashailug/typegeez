import React, { useState } from 'react'
import { useGeez } from './useGeez'

const Entry = () => {
  const [output, setOutput] = useGeez()
  const [currentWord, setCurrentWord] = useState('')

  const handleTyping = (e) => {
    const value = e.target.value
    setOutput(value)
  }

  const handleClick = (word) => {
    setCurrentWord(word)
  }

  const copyToClipboard = (word) => navigator.clipboard.writeText(word)

  return (
    <div className='grid grid-lg:cols-2 gap-2 h-full of-hidden px-8' grid="~ lg:cols-2 gap2">
      <div className='h-full grid grid-rows-[min-content_min-content_1fr]'>
        <div className='border-rounded border-base font-200 text-2xl shadow relative'>
          <input type={'text'}
              onChange={(event) => {
                handleTyping(event)
              }}
              placeholder='Type something here'
              aria-label="Type something here"
              autoComplete="off"
              className='b-1 px-6 py-4 border-none w-full bg-transparent !outline-none'
              />
        </div>
        <div className='mx-2 border-r border-l border-b border-base of-auto'>
          {output.map((item, idx) => (
          <>
            <div onClick={() => handleClick(item)} className='row gap-3 row px-3 py-2 border-transparent border-l-4 items-center text-left cursor-pointer select-none op60 hover:bg-gray5:2 hover:op100'>
              <div>
                <code>{item}</code>
              </div>
            </div>
            <div className='divider'></div>
          </>))}
        </div>
      </div>
      <div className='py-8 px-8 of-auto h-full'>
        {currentWord && <div>
          <h2 className='text-3xl font-light'>{currentWord}
            <button className="i-carbon-copy op50 w-4 h-4 hover:op-100 cursor-pointer ma" title="Copy" onClick={() => copyToClipboard(currentWord)}></button>
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
