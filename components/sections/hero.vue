<template>
  <div  class="flex relative w-screen  flex-col items-center w-full mt-24">
    <section 
      class="flex  relative container z-10 flex-col-reverse md:flex-row items-center  sm:p-6 sm:px-10 md:py-12 py-24 w-full"
    >
      <div data-aos="fade-right" class="sm:w-3/6 z-10 flex flex-col space-y-6 sm:px-0">
        <span class="sm:text-6xl poppinsFont text-3xl font-bold flex flex-col space-y-3">
          <a>Decentralized </a>
          <a>Asset Management </a>
          <a>On Uniswap V3</a>
        </span>
        <span>
          <!-- <a href="https://unboundfinance.gitbook.io/learn.defiedge.io/documentation/whitepaper">
            <button
              class="py-3 bg-blue-600 bg-primary-600 font-semibold px-8 rounded-lg transition hover:translate-x-1 hover: hover:shadow-lg hover:bg-blue-700 text-base"
            >
              Explore Docs
            </button>
          </a> -->
        </span>
      </div>
      <div data-aos="fade-left" class="md:w-7/12 z-10">
        <img
        class=""
          src="../../assets/images/hero.svg"
          alt=""
        />
      </div>

      
      
    </section>
    <section data-aos="fade-up" id="about" class="z-10 relative py-24 container flex justify-center w-full">
      <div class="z-10 items-center justify-center text-center space-y-6 flex flex-col px-4 md:px-0 md:w-7/12">
        <span class="text-3xl sm:text-4xl font-bold poppinsFont"
          >DefiEdge At A Glance</span
        >
        <span class="text-lg "
          >DefiEdge is a Uniswap V3 based platform for yield generation where strategy
          experts deploy strategies to generate returns with each pool. Our permissionless
          factory contracts allows anyone to be a strategy manager and users are free to
          add or remove liquidity in the strategies of their choice.</span
        >
      </div>

    </section>

    <section class="z-10 container mx-12 md:px-12">
      <div class="relative pt-12 flex rounded-3xl">
        <div class="relative overflow-hidden rounded-3xl flex md:py-12 darkBlack w-full h-full">
          <div data-aos="fade-right" class="w-full md:w-1/2 flex flex-col md:pl-24 mt-24 space-y-4 px-12 mb-32">
            <span class="text-3xl sm:text-4xl font-bold">
              Simplified Asset Management
            </span>
            <span class="md:w-5/6 md:pr-12 text-lg">
              DefiEdge, as a platform, seeks to invite the best strategy managers of the
              industry to pursue a diverse array of strategies with a view to deliver
              exceptional returns on user investment through optimized liquidity
              management of Uniswap V3 pools.
            </span>
          </div>
          <div data-aos="fade-left" class="hidden  md:block w-1/2 z-10 pr-8">
            <img class="w-full h-full" src="../../assets/images/dashboard.svg" alt="" />
          </div>
          <img
            class="absolute hidden md:block h-full"
            src="../../assets/images/asseteffect.png"
            alt=""
          />
        </div>
      </div>
    </section>
    
            <img class="absolute top-0 w-full h-full top-0 -mt-2" src="../../assets/images/gradient.png" alt="">


          <!-- <img class="bg-red-100 absolute h-full w-full" src="" alt=""> -->
  </div>
</template>

<script>

export default {

};
</script>

<style></style>
