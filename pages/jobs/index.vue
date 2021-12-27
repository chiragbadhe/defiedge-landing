<template>
  <div class="flex flex-col items-center justify-center">
    <app-header-jobs />
    <section class=" container my-16 flex flex-col items-center jsutify-center">
       <div class="relative flex w-5/6 my-12 flex-col items-center justify-center">
      <div class="z-10 flex flex-col items-center">
        <span class="text-3xl text-blue-600">
          Join Us
        </span>
        <span class="text-8xl text-center px-12 font-extrabold">
          Find your home at DefiEdge
        </span>
      </div>
      <img src="../../assets/images/effecthire.svg" class="absolute" alt="">
    </div>
      <div class="px-12">
        <div class="flex my-24">
        <div class="flex space-y-8 pr-12 flex-col w-1/2 ">
          <span class="text-6xl font-bold">Our Vision</span>
          <span class="text-lg">We’re creating the foundation for the open financial system to flourish. We’re creating
            tools that
            empower developers, fund managers, and investors to interact with crypto compositions that are more valuable
            than their individual parts.</span>
        </div>
        <div class="w-1/2 h-72">
          <img class="w-full h-full" src="../../assets/images/vision.svg" alt="">
        </div>
      </div>

      <div class="flex-row-reverse flex my-12">
        <div class="flex space-y-6 pl-12 flex-col w-1/2 ">
          <span class="text-6xl font-bold">Who we are </span>
          <span class="text-lg">We’re a passionate team of learners, raising the bar with everything we do. We believe
            in working hard
            and playing hard and creating meaningful products that make a positive impact in people’s lives.</span>
        </div>
        <div class="w-1/2 h-72">
          <img class="w-full h-full" src="../../assets/images/wwr.svg" alt="">
        </div>
      </div>
      </div>

      <div class="mx-12 flex p-6 border my-12 w-full rounded-3xl space-y-12 pb-24 flex-col items-center justify-center">
        <span class="text-4xl font-bold"> Current Job Openings
        </span>
        <div class="flex space-y-8 flex-col items-left w-full">
          <div class="space-y-4">
            <span class="text-xl">Developers</span>
            <div class="flex flex-col">
              <a target="_blank" href="https://edgedefi.freshteam.com/jobs/_z6jZldyKXVG/smart-contract-developer"
                class="text-xl text-blue-600">
                Graphics
              </a>
              <span class="text-sm">
                Work From Home
              </span>
            </div>


            <div class="flex flex-col">
              <a target="_blank" href="https://edgedefi.freshteam.com/jobs/_z6jZldyKXVG/smart-contract-developer"
                class="text-xl text-blue-600">
                UI Developer
              </a>
              <span class="text-sm">
                Work From Home
              </span>
            </div>


            <div class="flex flex-col">
              <a target="_blank" href="https://edgedefi.freshteam.com/jobs/_z6jZldyKXVG/smart-contract-developer"
                class="text-xl text-blue-600">
                Smart Contract Developer
              </a>
              <span class="text-sm">
                Work From Home
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
  import AppHeaderJobs from '../../components/global/AppHeaderJobs.vue'
  export default {
    components: {
      AppHeaderJobs
    },

  }

</script>

<style>

</style>
