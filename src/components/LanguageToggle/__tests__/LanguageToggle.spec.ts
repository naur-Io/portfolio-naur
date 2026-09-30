import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import LanguageToggle from '../LanguageToggle.vue'
import { i18n } from '../../../i18n'

describe('LanguageToggle.vue Component', () => {
  beforeEach(() => {
    i18n.global.locale.value = 'pt-BR'
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

  it('highlights active PT-BR locale button by default', () => {
    const wrapper = mount(LanguageToggle, {
      global: {
        plugins: [i18n]
      }
    })

    const buttons = wrapper.findAll('.lang-btn')
    expect(buttons[1]!.classes()).toContain('active')
    expect(buttons[0]!.classes()).not.toContain('active')
  })

  it('changes locale when EN button is clicked', async () => {
    const wrapper = mount(LanguageToggle, {
      global: {
        plugins: [i18n]
      }
    })

    const enBtn = wrapper.findAll('.lang-btn')[0]!
    await enBtn.trigger('click')

    expect(i18n.global.locale.value).toBe('en')
    expect(enBtn.classes()).toContain('active')
  })
})
