import React, { useState } from 'react'

const log = console.log

const dict = new Map()

dict.set('y', ['የ', 'ዩ', 'ዪ', 'ያ', 'ዬ', 'ይ', 'ዮ'])
dict.set('a', ['አ', 'ኡ', 'ኢ', 'ኣ', 'ኤ', 'እ', 'ኦ'])
dict.set('n', ['ነ', 'ኑ', 'ኒ', 'ና', 'ኔ', 'ን', 'ኖ'])
dict.set('s', ['ሰ', 'ሱ', 'ሲ', 'ሳ', 'ሴ', 'ስ', 'ሶ'])

const vowels = ['e', 'u', 'i', 'a', 'ie', '', 'o']

const App = () => {

    const [lastChar, setLastChar] = useState('')
    const [output, setOutput] = useState('')

    const handleTyping = (value) => {

        const currentChar = value.charAt(value.length - 1)

        if (!vowels.includes(currentChar)) {

            if (lastChar && !vowels.includes(lastChar) || !lastChar) {
                const found = dict.get(lastChar || currentChar)
                setOutput(output + found[vowels.indexOf('')])
            }

            setLastChar(currentChar)

            return
        }
        
        if (!lastChar && currentChar.toLowerCase() === 'a') {
            setOutput(output + dict.get(currentChar)[vowels.indexOf('')])
            setLastChar(currentChar)

            return
        }

        const found = dict.get(lastChar)

        if (!found) return

        if (!vowels.includes(lastChar) || lastChar === 'a') {
            const word = output.substring(0, output.length - 1)
            setOutput(word + found[vowels.indexOf(currentChar)])

            return
        }

        setOutput(output + found[vowels.indexOf(currentChar)])
        setLastChar('')
    }

    return (
        <>
            <input type={'text'} onChange={(e) => handleTyping(e.target.value)} />
            <div>{output}</div>
        </>
    )
}

export default App