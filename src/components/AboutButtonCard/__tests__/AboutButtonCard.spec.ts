import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutButtonCard from '../AboutButtonCard.vue'
import { i18n } from '../../../i18n'

describe('AboutButtonCard.vue Component', () => {
  beforeEach(() => {
    i18n.global.locale.value = 'pt-BR'
  })

  it('renders translated title and description in Portuguese', () => {
    const wrapper = mount(AboutButtonCard, {
      global: {
        plugins: [i18n]
      }
    })

    expect(wrapper.text()).toContain('Sobre')
    expect(wrapper.text()).toContain('conheça um pouco mais sobre o meu tipo de trabalho')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(AboutButtonCard, {
      global: {
        plugins: [i18n]
      }
    })

    await wrapper.find('.card').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
