<template>
  <nav class="z-20 container w-full md:p-6 md:px-10 p-4 justify-center flex text-white">
    <div class="flex items-center justify-between w-full">
      <!-- Header logo -->
      <nuxt-link to="/">
        <mainlogo />
      </nuxt-link>
      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="drawer">
          <svg class="h-8 w-8 fill-current text-white" fill="none" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden md:block">
        <ul class="flex space-x-8 text-white font-sans text-base">
          <li><nuxt-link class="bg-blue-600 transform duration-200 hover:bg-blue-700 px-4 p-2 text-base" to="/">Home</nuxt-link></li>
        </ul>
      </div>

      <!-- Dark Background Transition -->
      <transition enter-class="opacity-0" enter-active-class="ease-out transition-medium" enter-to-class="opacity-100"
        leave-class="opacity-100" leave-active-class="ease-out transition-medium" leave-to-class="opacity-0">
        <div v-show="isOpen" class="z-10 fixed inset-0 transition-opacity" @keydown.esc="isOpen = false">
          <div class="absolute inset-0 bg-gray-700 opacity-50" tabindex="0" @click="isOpen = false"></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside
        class="p-5 transform top-0 left-0 w-64 bg-gray-900 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 justify-between flex flex-col pb-12"
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'">

        <div>
          <div class="close">
            <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
              <svg class="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <span class="flex w-full items-center p-4 border-b" @click="isOpen = false">
            <mainlogo />
          </span>

          <ul class="divide-y font-sans">
            <li><nuxt-link class="my-4 inline-block" to="/hiring">We Are Hiring </nuxt-link></li>
          </ul>
        </div>
      </aside>
    </div>
  </nav>
</template>

<script>
  import mainlogo from '../sections/mainlogo.vue';
  export default {
    components: {
      mainlogo
    },
    data() {
      return {
        isOpen: false,
        view: {
          atTopOfPage: true
        },
        buttons: [{
            to: '#about',
            text: 'About',
          },
          {
            to: '#features',
            text: 'Features',
          },
          {
            to: '#community',
            text: 'Community',
          },
        ],
        menu: true,
      };
    },
    watch: {
      isOpen: {
        immediate: true,
        handler(isOpen) {
          if (process.client) {
            if (isOpen) document.body.style.setProperty("overflow", "hidden");
            else document.body.style.removeProperty("overflow");
          }
        }
      }
    },

    beforeMount() {
      window.addEventListener('scroll', this.handleScroll);
    },

    mounted() {
      document.addEventListener("keydown", e => {
        if (e.keyCode === 27 && this.isOpen) this.isOpen = false;
      });
    },
    methods: {
      drawer() {
        this.isOpen = !this.isOpen;
      },

      handleScroll() {
        // when the user scrolls, check the pageYOffset
        if (window.pageYOffset > 0) {
          // user is scrolled
          if (this.view.atTopOfPage) this.view.atTopOfPage = false
        } else {
          // user is at top of page
          // eslint-disable-next-line no-lonely-if
          if (!this.view.atTopOfPage) this.view.atTopOfPage = true
        }
      }
    }
  };

</script>
