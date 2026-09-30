import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import IntroCard from '../IntroCard.vue'
import { i18n } from '../../../i18n'

describe('IntroCard.vue Component', () => {
  beforeEach(() => {
    i18n.global.locale.value = 'pt-BR'
  })

  it('renders Portuguese text by default', () => {
    const wrapper = mount(IntroCard, {
      global: {
        plugins: [i18n]
      }
    })

    expect(wrapper.text()).toContain('Engenheiro de Software')
    expect(wrapper.text()).toContain('Olá, eu sou o Naur')
  })

  it('updates text reactively when locale is switched to en', async () => {
    const wrapper = mount(IntroCard, {
      global: {
        plugins: [i18n]
      }
    })

    i18n.global.locale.value = 'en'
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('Software Engineer')
    expect(wrapper.text()).toContain("Hi, I'm Naur")
  })
})
