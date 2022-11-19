import { describe, it, before } from 'mocha'
import { expect } from 'chai'
import TypeGeez from './TypeGeez'

describe('TypeGeez', () => {
  let typeGeez
  before(() => {
    typeGeez = new TypeGeez()
  })

  describe('construction', () => {
    it('is ok', () => expect(typeGeez).to.be.ok)
  })

  describe('lookup(items, currentItems, collect)', () => {
    it('is a function', () => expect(typeGeez.lookup).to.be.a('function'))

    it('returns an array', () => {
      const items = [['he', 'y'], ['h', 'e', 'y']]
      const translated = []
      const expected = [['ሀ', 'ይ'], ['ሀ', 'የ'], ['ሄ', 'ይ'], ['ሄ', 'የ'], ['ሐ', 'ይ'], ['ሐ', 'የ'], ['ሔ', 'ይ'], ['ሔ', 'የ']]

      items.forEach(item => typeGeez.lookup(item, [], translated))

      expect(translated).to.be.deep.equal(expected)
    })
  })

  describe('getCharacterCombination(item, currentItems, collect)', () => {
    it('is a function', () => expect(typeGeez.lookup).to.be.a('function'))

    it('returns an array', () => {
      const item = 'hey'
      const result = []

      typeGeez.getCharacterCombination(item, [], result)

      expect(result).to.be.deep.equal([['he', 'y'], ['h', 'e', 'y']])
    })
  })

  describe('numbersToGeez (number)', () => {
    it('is a function', () => expect(typeGeez.numbersToGeez).to.be.a('function'))

    it('returns a Geez number when natural numbers provided', () => expect(typeGeez.numbersToGeez(1000)).to.equal('፲፻'))

    it('returns empty string when 0 is provided', () => expect(typeGeez.numbersToGeez(0)).to.equal(''))
  })
})
