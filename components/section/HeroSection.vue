<template>
  <!-- Hero section with slogan on the left and image on the right -->
  <div class="flex flex-col overflow-hidden bg-white md:flex-row">
    <div class="flex-1 mx-auto max-w-7xl">
      <div
        class="relative z-10 pb-8 bg-white  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <main
          class="px-4 mx-auto mt-10  max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h2 class="text-xl font-black text-blue-900">Rocket Inc.</h2>
            <h1
              class="mt-3 text-4xl font-extrabold tracking-tight text-gray-900  sm:text-5xl md:text-6xl"
            >
              <span class="block xl:inline">We are the company</span>
              {{ ' ' }}
              <span class="block text-blue-600 xl:inline"
                >you are looking for</span
              >
            </h1>
            <p
              class="mt-3 text-base text-gray-600  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl lg:mx-0"
            >
              We provide products and services for your business. We are
              <b>the best</b> at what we do, contact us to find out more about
              what we offer.
            </p>
          </div>
        </main>
      </div>
    </div>
    <div
      class="flex-1 bg-cover"
      :style="{
        backgroundImage: `url(https://pbllp.com/wp-content/uploads/2018/04/AdobeStock_106606376.jpg)`,
      }"
    ></div>
  </div>
</template>
