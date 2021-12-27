import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {"easing":[0.9,0.14,0.14,0.93],"duration":800})

export default function (ctx, inject) {
    inject('scrollTo', VueScrollTo.scrollTo)
}
