<template>
  <div id="community" class="flex flex-col md:mx-12 items-center justify-center defaultColor ">
    <section  class=" md:px-12 mt-24 container ">
      <div class=" md:pl-16 flex flex-col md:flex-row darkBlack p-6 space-y-4 md:space-y-0 md:p-0 overflow-hidden rounded-3xl">
        <div data-aos="fade-right" class="w-full md:w-1/2 md:-mt-14 space-y-6  justify-center flex flex-col">
          <span class="text-3xl sm:text-4xl font-bold space-y-3 poppinsFont">
            Be A Strategy Manager
          </span>
          <span class="text-lg pr-12">
            DefiEdge provides factory contracts that lets anyone deploy strategies and define management fees. It
            is the responsibility of the strategy manager to continually adapt to dynamic conditions and actively pursue
            market opportunities, delivering high-quality returns. Strategy managers earn incentives by charging users
            for their management services.
          </span>
        </div>

              <div class="w-full md:w-1/2 bg-red-100  flex items-center justify-center">
          <img class="w-full" src="../../assets/images/stratergy.png" alt="">
        </div>
        
      </div>
    </section>

    <section
      class="container my-24 flex flex-col sm:flex-row items-center justify-center w-full px-12 md:h-96 space-y-4 ">
      <div class="relative space-y-4 w-full h-full ">
        <div data-aos="fade-right" class="h-2/5 flex flex-col px-12 md:px-0">
          <span class="text-3xl sm:text-4xl font-bold poppinsFont">
            Fee Structure
          </span>
          <span class="pt-4 text-lg">
            When investing with DeFiEdge, investors fund two types of fees, the platform fees and the strategy
            management fees.
          </span>
        </div>
        <div data-aos="fade-right" class="relative h-3/5 overflow-hidden rounded-3xl items-start p-6 flex flex-col darkBlack">
          <img class="h-24" src="../../assets/images/feestructure/fee01.svg" alt="">
          <span class="w-3/5 mt-2 text-lg">The platform fee is charged by the Edge Protocol
            It is initially set to 0.</span>
          <img class="absolute w-full right-0 top-0" src="../../assets/images/feestructure01.svg" alt="">

        </div>
      </div>


      <div
      data-aos="fade-left"
        class="relative overflow-hidden w-full md:w-2/5 space-y-4 rounded-3xl flex flex-col items-start p-6 darkBlack sm:ml-12 sm:h-96">
        <span>
          <img src="../../assets/images/feestructure/fee02.svg" alt="">
        </span>
        <span class="pr-12 text-lg">
          The strategy management fee is defined and charged by the strategy manager to the investor in lieu of the
          services provided
          by them.
        </span>
        <img class="absolute w-full right-0 bottom-0" src="../../assets/images/feestructure02.svg" alt="">

      </div>
    </section>

    <section data-aos="fade-out" class="container px-12 flex pb-24 flex-col space-y-12 items-center w-full justify-center">
      <div class="">
        <span class="text-3xl text-center sm:text-4xl font-bold px-12 md:px-0 poppinsFont flex items-center justify-center">
          Choose Your Strategy Manager
        </span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-12 gap-12">
        <div class="flex transform duration-200 hover:-translate-y-1 space-y-2 text-center flex-col items-center justify-items-start">
          <span>
            <img src="../../assets/images/strategy/strategy01.svg" alt="">
          </span>
          <span class="font-bold text-xl ">
            Choose Pool Category
          </span>
          <span class="text-lg font-thin">
            Select the pool you prefer to invest in or choose to add single-sided liquidity using a lone stablecoin
          </span>
        </div>

        <div class="flex transform duration-200 hover:-translate-y-1 space-y-2 text-center flex-col items-center justify-items-start">
          <span>
            <img src="../../assets/images/strategy/strategy02.svg" alt="">
          </span>
          <span class="font-bold text-xl">
            Track Record
          </span>
          <span class="text-lg">
            View profile to get an insight into the background of the strategy manager </span>
        </div>


        <div class="flex transform duration-200 hover:-translate-y-1 space-y-2 text-center flex-col items-center justify-items-start">
          <span>
            <img src="../../assets/images/strategy/strategy03.svg" alt="">
          </span>
          <span class="font-bold text-xl">
            Consistency
          </span>
          <span class="text-lg">
            Analyse performance
            based on APYs generated on previous investments </span>
        </div>

        <div class="flex transform duration-200 hover:-translate-y-1 space-y-2 text-center flex-col items-center justify-items-start">
          <span>
            <img src="../../assets/images/strategy/strategy04.svg" alt="">
          </span>
          <span class="font-bold text-xl">
            Compare
            And Select </span>
          <span class="text-lg">
            Compare strategy managers based on previous parameters and choose the right one to invest with </span>
        </div>

      </div>

    </section>
  </div>
</template>

<script>
  export default {}

</script>

<style>

</style>
