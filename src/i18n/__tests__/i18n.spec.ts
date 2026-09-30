import { describe, it, expect } from 'vitest'
import { i18n, messages } from '../index'

describe('i18n Configuration', () => {
  it('should have English and Portuguese (pt-BR) translation dictionaries', () => {
    expect(messages.en).toBeDefined()
    expect(messages['pt-BR']).toBeDefined()
  })

  it('should default to "pt-BR" locale', () => {
    expect(i18n.global.locale.value).toBe('pt-BR')
  })

  it('should contain matching keys for both locales', () => {
    expect(Object.keys(messages.en)).toEqual(Object.keys(messages['pt-BR']))
    expect(messages.en.intro.title).toBe("Hi, I'm Naur")
    expect(messages['pt-BR'].intro.title).toBe("Olá, eu sou o Naur")
  })
})
