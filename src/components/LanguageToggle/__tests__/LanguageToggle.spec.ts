import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import LanguageToggle from '../LanguageToggle.vue'
import { i18n } from '../../../i18n'

describe('LanguageToggle.vue Component', () => {
  beforeEach(() => {
    i18n.global.locale.value = 'en'
  })

  it('renders language toggle buttons', () => {
    const wrapper = mount(LanguageToggle, {
      global: {
        plugins: [i18n]
      }
    })

    expect(wrapper.text()).toContain('EN')
    expect(wrapper.text()).toContain('PT-BR')
  })

  it('highlights active locale button', () => {
    const wrapper = mount(LanguageToggle, {
      global: {
        plugins: [i18n]
      }
    })

    const buttons = wrapper.findAll('.lang-btn')
    expect(buttons[0]!.classes()).toContain('active')
    expect(buttons[1]!.classes()).not.toContain('active')
  })

  it('changes locale when PT-BR button is clicked', async () => {
    const wrapper = mount(LanguageToggle, {
      global: {
        plugins: [i18n]
      }
    })

    const ptBtn = wrapper.findAll('.lang-btn')[1]!
    await ptBtn.trigger('click')

    expect(i18n.global.locale.value).toBe('pt-BR')
    expect(ptBtn.classes()).toContain('active')
  })
})
