import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutButtonCard from '../AboutButtonCard.vue'
import { i18n } from '../../../i18n'

describe('AboutButtonCard.vue Component', () => {
  beforeEach(() => {
    i18n.global.locale.value = 'en'
  })

  it('renders translated title and description', () => {
    const wrapper = mount(AboutButtonCard, {
      global: {
        plugins: [i18n]
      }
    })

    expect(wrapper.text()).toContain('About')
    expect(wrapper.text()).toContain('know a little more about my kind of work')
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
