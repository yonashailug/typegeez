const dictionary = new Map()
const numbers = new Map()

numbers.set(1, '፩')
numbers.set(2, '፪')
numbers.set(3, '፫')
numbers.set(4, '፬')
numbers.set(5, '፭')
numbers.set(6, '፮')
numbers.set(7, '፯')
numbers.set(8, '፰')
numbers.set(9, '፱')
numbers.set(10, '፲')
numbers.set(20, '፳')
numbers.set(30, '፴')
numbers.set(40, '፵')
numbers.set(50, '፶')
numbers.set(60, '፷')
numbers.set(70, '፸')
numbers.set(80, '፹')
numbers.set(90, '፺')
numbers.set(100, '፻')
numbers.set(10000, '፼')

dictionary.set('ha', ['ሃ', 'ሓ', 'ኃ'])
dictionary.set('he', ['ሀ', 'ሄ', 'ሐ', 'ሔ', 'ኀ', 'ኄ'])
dictionary.set('hi', ['ሂ', 'ሒ', 'ኂ'])
dictionary.set('ho', ['ሆ', 'ሖ', 'ኆ'])
dictionary.set('hu', ['ሁ', 'ሑ', 'ኁ'])
dictionary.set('h', ['ህ', 'ሕ', 'ኅ', 'ኀ'])

dictionary.set('la', ['ላ'])
dictionary.set('le', ['ለ', 'ሌ'])
dictionary.set('li', ['ሊ', 'ል'])
dictionary.set('lo', ['ሎ'])
dictionary.set('lu', ['ሉ'])
dictionary.set('l', ['ል', 'ለ'])

dictionary.set('ma', ['ማ'])
dictionary.set('me', ['መ', 'ሜ'])
dictionary.set('mi', ['ሚ', 'ም'])
dictionary.set('mo', ['ሞ'])
dictionary.set('mu', ['ሙ'])
dictionary.set('m', ['ም', 'መ'])

dictionary.set('ra', ['ራ'])
dictionary.set('re', ['ረ', 'ሬ'])
dictionary.set('ri', ['ሪ', 'ር'])
dictionary.set('ro', ['ሮ'])
dictionary.set('ru', ['ሩ'])
dictionary.set('r', ['ር'])

dictionary.set('sa', ['ሳ', 'ሣ'])
dictionary.set('se', ['ሰ', 'ሴ', 'ሠ', 'ሤ'])
dictionary.set('si', ['ሲ', 'ሢ'])
dictionary.set('so', ['ሶ', 'ሦ'])
dictionary.set('su', ['ሱ', 'ሡ'])
dictionary.set('s', ['ስ', 'ሥ'])

dictionary.set('sha', ['ሻ'])
dictionary.set('she', ['ሸ', 'ሼ'])
dictionary.set('shi', ['ሺ'])
dictionary.set('sho', ['ሾ'])
dictionary.set('shu', ['ሹ'])
dictionary.set('sh', ['ሽ'])

dictionary.set('xa', ['ሻ', 'ሳ'])
dictionary.set('xe', ['ሸ', 'ሼ', 'ሰ'])
dictionary.set('xi', ['ሺ', 'ሲ'])
dictionary.set('xo', ['ሾ', 'ሶ'])
dictionary.set('xu', ['ሹ', 'ሱ'])
dictionary.set('x', ['ሽ', 'ስ'])

dictionary.set('qa', ['ቃ'])
dictionary.set('qe', ['ቀ', 'ቄ'])
dictionary.set('qi', ['ቂ', 'ቅ'])
dictionary.set('qo', ['ቆ'])
dictionary.set('qu', ['ቁ'])
dictionary.set('q', ['ቅ'])

dictionary.set('ba', ['ባ'])
dictionary.set('be', ['በ', 'ቤ'])
dictionary.set('bi', ['ቢ'])
dictionary.set('bo', ['ቦ'])
dictionary.set('bu', ['ቡ'])
dictionary.set('b', ['ብ'])

dictionary.set('va', ['ቫ'])
dictionary.set('ve', ['ቨ', 'ቬ'])
dictionary.set('vi', ['ቪ', 'ቭ'])
dictionary.set('vo', ['ቮ'])
dictionary.set('vu', ['ቩ'])
dictionary.set('v', ['ቭ'])

dictionary.set('ta', ['ታ', 'ጣ'])
dictionary.set('te', ['ተ', 'ቴ', 'ጠ', 'ጤ'])
dictionary.set('ti', ['ቲ', 'ት', 'ጢ', 'ጥ'])
dictionary.set('to', ['ቶ', 'ጦ'])
dictionary.set('tu', ['ቱ', 'ጡ'])
dictionary.set('t', ['ት', 'ጥ'])

dictionary.set('cha', ['ቻ'])
dictionary.set('che', ['ቸ', 'ቼ'])
dictionary.set('chi', ['ቺ'])
dictionary.set('cho', ['ቾ'])
dictionary.set('chu', ['ቹ'])
dictionary.set('ch', ['ች'])

dictionary.set('n', ['ን', 'ነ', 'ኝ'])
dictionary.set('na', ['ና', 'ኛ'])
dictionary.set('ne', ['ነ', 'ኔ', 'ኘ', 'ኜ'])
dictionary.set('ni', ['ኒ', 'ን', 'ኚ'])
dictionary.set('no', ['ኖ', 'ኞ'])
dictionary.set('nu', ['ኑ', 'ኙ'])

dictionary.set('ka', ['ካ', 'ኻ', 'ቃ'])
dictionary.set('ke', ['ከ', 'ኸ', 'ኼ', 'ቀ', 'ቄ', 'ኬ'])
dictionary.set('ki', ['ኪ', 'ኺ', 'ቂ'])
dictionary.set('ko', ['ኮ', 'ኾ', 'ቆ'])
dictionary.set('ku', ['ኩ', 'ኹ', 'ቁ'])
dictionary.set('k', ['ክ', 'ኽ', 'ቅ'])

dictionary.set('wa', ['ዋ'])
dictionary.set('we', ['ወ', 'ዌ'])
dictionary.set('wi', ['ዊ'])
dictionary.set('wo', ['ዎ'])
dictionary.set('wu', ['ዉ'])
dictionary.set('w', ['ው'])

dictionary.set('za', ['ዛ', 'ዣ'])
dictionary.set('ze', ['ዘ', 'ዠ', 'ዜ', 'ዤ'])
dictionary.set('zi', ['ዚ', 'ዢ'])
dictionary.set('zo', ['ዞ', 'ዦ'])
dictionary.set('zu', ['ዙ', 'ዡ'])
dictionary.set('z', ['ዝ', 'ዥ'])

dictionary.set('y', ['ይ', 'የ'])
dictionary.set('ya', ['ያ'])
dictionary.set('ye', ['የ', 'ዬ'])
dictionary.set('yi', ['ዪ', 'ይ'])
dictionary.set('yo', ['ዮ'])
dictionary.set('yu', ['ዩ'])

dictionary.set('da', ['ዳ'])
dictionary.set('de', ['ደ', 'ዴ'])
dictionary.set('di', ['ዲ'])
dictionary.set('do', ['ዶ'])
dictionary.set('du', ['ዱ'])
dictionary.set('d', ['ድ'])

dictionary.set('ja', ['ጃ'])
dictionary.set('je', ['ጀ', 'ጄ'])
dictionary.set('ji', ['ጂ'])
dictionary.set('jo', ['ጆ'])
dictionary.set('ju', ['ጁ'])
dictionary.set('j', ['ጅ'])

dictionary.set('ga', ['ጋ'])
dictionary.set('ge', ['ገ', 'ጌ'])
dictionary.set('gi', ['ጊ', 'ግ'])
dictionary.set('go', ['ጎ'])
dictionary.set('gu', ['ጉ'])
dictionary.set('g', ['ግ'])

dictionary.set('ca', ['ጫ', 'ቻ', 'ካ'])
dictionary.set('ce', ['ጨ', 'ጬ', 'ቸ', 'ከ'])
dictionary.set('ci', ['ጪ', 'ቺ', 'ኪ'])
dictionary.set('co', ['ጮ', 'ቾ', 'ኮ'])
dictionary.set('cu', ['ጩ', 'ቹ', 'ኩ'])
dictionary.set('c', ['ጭ', 'ች', 'ክ'])

dictionary.set('pa', ['ፓ', 'ጳ'])
dictionary.set('pe', ['ፐ', 'ፔ', 'ጰ'])
dictionary.set('pi', ['ፒ', 'ጲ'])
dictionary.set('po', ['ፖ', 'ጶ'])
dictionary.set('pu', ['ፑ', 'ጱ'])
dictionary.set('p', ['ፕ', 'ጵ'])

dictionary.set('tsa', ['ፃ', 'ፀ'])
dictionary.set('tse', ['ፀ', 'ፄ'])
dictionary.set('tsi', ['ፂ', 'ፅ'])
dictionary.set('tso', ['ፆ'])
dictionary.set('tsu', ['ፁ'])
dictionary.set('ts', ['ፅ'])

dictionary.set('gna', ['ኛ'])
dictionary.set('gne', ['ኘ', 'ኜ'])
dictionary.set('gni', ['ኒ', 'ኝ'])
dictionary.set('gno', ['ኞ'])
dictionary.set('gnu', ['ኙ'])
dictionary.set('gn', ['ኝ'])

dictionary.set('fa', ['ፋ'])
dictionary.set('fe', ['ፈ', 'ፌ'])
dictionary.set('fi', ['ፊ', 'ፍ'])
dictionary.set('fo', ['ፎ'])
dictionary.set('fu', ['ፉ'])
dictionary.set('f', ['ፍ'])

dictionary.set('a', ['እ', 'ኣ'])
dictionary.set('e', ['ኢ', 'ኤ', 'አ'])
dictionary.set('i', ['ኢ', 'እ', 'ይ'])
dictionary.set('o', ['ኦ'])
dictionary.set('u', ['ኡ'])

const LOOKUP_LIMIT = 7 // Golden number :)

class TypeGeez {
  constructor (options) {
    this.lookupLimit = options?.limit || LOOKUP_LIMIT
    this.vowels = ['e', 'u', 'i', 'a', 'o']
    this.consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
    this.doubleConsonants = ['ts', 'sh', 'ch', 'gn']
  }

  lookup (items, currentItems, collect) {
    if (collect.length > this.lookupLimit) return

    while (items.length !== 0) {
      const found = dictionary.get(items.shift())

      if (!found) return

      if (found.length === 1) {
        currentItems.push(found[0])
        continue
      }

      for (let j = 0; j < found.length; j++) {
        this.lookup([...items], [...currentItems, found[j]], collect)
      }
      return
    }

    if (currentItems.length) collect.push(currentItems)
  }

  getCharacterCombination (item, currentItems, collect) {
    if (collect.length > this.lookupLimit) return

    for (let i = 0; i < item.length; i++) {
      if (i === item.length - 1 || this.vowels.includes(item.charAt(i))) {
        currentItems.push(item.charAt(i))
        continue
      }

      if (this.doubleConsonants.includes(item.substring(i, i + 2))) {
        if (this.vowels.includes(item.charAt(i + 2))) {
          this.getCharacterCombination(
            item.substring(i + 3),
            [...currentItems, item.substring(i, i + 3)],
            collect)
        }
      } else if (this.consonants.includes(item.charAt(i + 1))) {
        currentItems.push(item.charAt(i))
        continue
      }

      this.getCharacterCombination(
        item.substring(i + 2),
        [...currentItems, item.substring(i, i + 2)],
        collect)

      return this.getCharacterCombination(
        item.substring(i + 1),
        [...currentItems, item.substring(i, i + 1)],
        collect)
    }

    collect.push(currentItems)
  }

  numbersToGeez (number) {
    if (number === 0) return ''

    if (numbers.get(number)) {
      return numbers.get(number)
    }

    if (number > 10 && number < 100) {
      return numbers.get(Math.floor(number / 10) * 10) + this.numbersToGeez(number % 10)
    }

    if (number > 100 && number < 10000) {
      return this.numbersToGeez(Math.floor(number / 100)) + numbers.get(100) + this.numbersToGeez(number % 100)
    }

    if (number > 10000) {
      return this.numbersToGeez(Math.floor(number / 10000)) + numbers.get(10000) + this.numbersToGeez(number % 10000)
    }
  }
}

export default TypeGeez
