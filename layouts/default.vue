<template>
  <div id="app"
    class="
    gradient
    relative
      flex flex-col
      poppinsFont
      items-center
      justify-center
      w-screen
      h-auto
      defaultColor
      text-white
      overflow-hidden
    "
  >
    <nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '../components/global/AppFooter.vue'
import aosMixin from '~/mixins/aos'


export default {
  name: 'PageIndex',
  components: {
    AppFooter,
  },
  mixins: [aosMixin],
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

body, html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
body {
  background-color: #181818;
}

/* body {
  font-family: 'Poppins', sans-serif;
}

.app {
  font-family: 'Poppins', sans-serif !important;
}

.defaultColor {
  background-color: #181818;
}

.darkBlack {
  background-color: black;
}

.poppinsFont {
  font-family: 'Poppins', sans-serif;
  font-family: 'DM Sans', sans-serif;
} */

</style>
