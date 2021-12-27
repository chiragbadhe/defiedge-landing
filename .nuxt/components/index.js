export { default as AppFooter } from '../../components/global/AppFooter.vue'
export { default as AppHeader } from '../../components/global/AppHeader.vue'
export { default as AppHeaderJobs } from '../../components/global/AppHeaderJobs.vue'
export { default as SectionsCommunity } from '../../components/sections/community.vue'
export { default as SectionsFeatures } from '../../components/sections/features.vue'
export { default as SectionsHero } from '../../components/sections/hero.vue'
export { default as SectionsMainlogo } from '../../components/sections/mainlogo.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
