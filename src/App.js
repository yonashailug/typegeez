import React, { useState } from 'react'

const log = console.log

const dict = new Map()

dict.set('h', ['ሀ', 'ሁ', 'ሂ', 'ሃ', 'ሄ', 'ህ', 'ሆ'])
dict.set('y', ['የ', 'ዩ', 'ዪ', 'ያ', 'ዬ', 'ይ', 'ዮ'])
dict.set('a', ['አ', 'ኡ', 'ኢ', 'ኣ', 'ኤ', 'እ', 'ኦ'])
dict.set('n', ['ነ', 'ኑ', 'ኒ', 'ና', 'ኔ', 'ን', 'ኖ'])
dict.set('s', ['ሰ', 'ሱ', 'ሲ', 'ሳ', 'ሴ', 'ስ', 'ሶ'])

const vowels = ['e', 'u', 'i', 'a', 'ie', '', 'o']

const App = () => {

    const [lastChar, setLastChar] = useState('')
    const [output, setOutput] = useState('')

    const updateOutput = (consonantKey, vowelKey) => {
        const found = dict.get(consonantKey)
        setOutput(output + found[vowels.indexOf(vowelKey)])
    }

    const handleClearTyping = (event) => {

        if (event.keyCode !== 8) return

        const value = event.target.value
        const removedChar = value.charAt(value.length - 1)

        if (!removedChar) return

        if (removedChar === ' ') {
            setOutput(output.substring(0, output.length - 1))
            return
        }

        if (value.length == 1) {
            setOutput('')
            return
        }

        if (removedChar === 'a') {
            const charAfterRemove = value.charAt(value.length - 2)
            const found = dict.get(charAfterRemove)
            
            if ((charAfterRemove && !vowels.includes(charAfterRemove))) {
                setOutput(output.substring(0, output.length - 1) + found[vowels.indexOf('')])
                return
            }
            
            if (charAfterRemove === 'a') {
                
                const foundAndConsonant = value.charAt(value.length - 3)
                
                if (foundAndConsonant && !vowels.includes(foundAndConsonant)) {
                    setOutput(output.substring(0, output.length - 1))
                    return
                }
                
                setOutput(output.substring(0, output.length - 1) + found[vowels.indexOf('')])
                return
            }
            
            setOutput(output.substring(0, output.length - 1))
            return
        }
        
        if (vowels.includes(removedChar)) {
            
            const lastValue = value.charAt(value.length - 2)
            
            if (lastValue && lastValue === 'a') {
                
                const foundAndConsonant = value.charAt(value.length - 3)
                
                if (foundAndConsonant && !vowels.includes(foundAndConsonant)) {
                    setOutput(output.substring(0, output.length - 1))
                    return
                }

                const found = dict.get(lastValue)
                setOutput(output.substring(0, output.length - 1) + found[vowels.indexOf('')])
                return
            }

            if (removedChar === 'e') {

                log('something: ', lastValue)
                if (lastValue && lastValue === 'i') {
    
                    const localLastValue = value.charAt(value.length - 3)
                    
                    if (localLastValue && !vowels.includes(localLastValue)) {
                        const found = dict.get(localLastValue)
                        setOutput(output.substring(0, output.length - 1) + found[vowels.indexOf(lastValue)])
                        return
                    }
                }
            }

            
            if (lastValue && !vowels.includes(lastValue)) {
                const found = dict.get(lastValue)
                setOutput(output.substring(0, output.length - 1) + found[vowels.indexOf('')])
                return
            }

            setOutput(output.substring(0, output.length - 1))    
            
            return
        }

        setOutput(output.substring(0, output.length - 1))
    }

    const handleTyping = (event) => {

        if (event.keyCode === 8) return

        const value = event.target.value

        if (!value) {
            setOutput('')
            return
        }
        
        const currentChar = value.charAt(value.length - 1)

        if (currentChar === ' ') {
            setOutput(output + ' ')
            setLastChar('')
            return
        }

        if (vowels.includes(currentChar)) {

            if (!lastChar && currentChar !== 'a') {
                log('do nothing...')
                return
            }

            if (currentChar === 'a') {

                if (!lastChar || lastChar === 'i') {
                    setOutput(output + dict.get(currentChar)[vowels.indexOf('')])
                    setLastChar(currentChar)
                    return
                }

                if (lastChar === 'a') {
                    const word = output.substring(0, output.length - 1)
                    setOutput(word + dict.get(lastChar)[vowels.indexOf(currentChar)])
                    setLastChar('')
                    return
                }

                if (!vowels.includes(lastChar)) {
                    const word = output.substring(0, output.length - 1)
                    setOutput(word + dict.get(lastChar)[vowels.indexOf(currentChar)])
                    setLastChar('')
                }

            } else if (lastChar === 'i' && currentChar === 'e') {
                const lastConsonant = value.charAt(value.length - 3)
    
                if (!lastConsonant) return

                if (vowels.includes(lastConsonant)) return
    
                const found = dict.get(lastConsonant)
                const word = output.substring(0, output.length - 1)
                setOutput(word + found[vowels.indexOf(lastChar + currentChar)])
                setLastChar('')
    
            } else {
                const word = output.substring(0, output.length - 1)
                setOutput(word + dict.get(lastChar)[vowels.indexOf(currentChar)])
                setLastChar('')

                if (currentChar === 'i') {
                    setLastChar(currentChar)
                }
            }

        } else {
            const found = dict.get(currentChar)
            setOutput(output + found[vowels.indexOf('')])
            setLastChar(currentChar)
        }

    }

    return (
        <>
            <input type={'text'}
                onKeyUp={(event) => handleTyping(event)}
                onKeyDown={(event) => handleClearTyping(event)} />

            <div>{output}</div>
        </>
    )
}

export default App