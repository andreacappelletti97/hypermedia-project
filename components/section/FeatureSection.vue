<template>
  <div>
    <!-- Image on the left and title with description on the right -->
    <div v-if="left">
      <div class="relative bg-gray-50">
        <div class="bg-blue-700 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            class="object-cover w-full h-full"
            :src="image"
            alt="Feature section image"
          />
        </div>
        <div
          class="relative px-4 py-12 mx-auto  max-w-7xl sm:px-6 lg:px-20 lg:py-28"
        >
          <div class="md:ml-auto md:w-1/2 md:pl-20">
            <p
              class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900  sm:text-4xl"
            >
              {{ title }}
            </p>
            <p class="mt-3 text-lg text-gray-800">
              {{ desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Image on the right and title with description on the left -->
    <div v-else>
      <div class="flex flex-col-reverse items-center md:flex-row bg-gray-50">
        <div class="flex-1 lg:py-24">
          <div class="px-4 py-12 md:pr-20 md:pl-20">
            <p
              class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900  sm:text-4xl"
            >
              {{ title }}
            </p>
            <p class="mt-3 text-lg text-gray-800">
              {{ desc }}
            </p>
          </div>
        </div>

        <div class="flex-1 bg-blue-700">
          <img class="w-full h-full" :src="image" alt="Feature section image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    left: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>
