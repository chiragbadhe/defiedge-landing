<template>
  <div class="flex flex-col  poppinsFont items-center justify-center w-screen h-auto defaultColor text-white overflow-hidden">
    <app-header/>
    <hero/>
    <features />
    <community />
  </div>
</template>

<script>
import AppHeader from '../components/global/AppHeader.vue'
import Community from '../components/sections/community.vue'
import Features from '../components/sections/features.vue'
import hero from '../components/sections/hero.vue'
export default {
  components: { hero, Features, Community, AppHeader},
    mounted() {
      if (this.$route.hash)
        setTimeout(() => {
          try {
            this.$scrollTo(this.$route.hash)
          } catch {
            //
          }
        }, 200)
    },
    }

  
</script>
