<template>
  <!-- Content with image and name for a container inside a GridSection -->
  <div>
    <div
      class="flex-shrink-0 transition-transform duration-150 ease-in-out transform  hover:scale-105"
    >
      <img
        class="object-cover w-full h-48 border border-gray-300 rounded shadow-xl "
        :src="imageUrl"
        alt="Grid container image"
      />
    </div>
    <div class="flex flex-col justify-between flex-1 px-2 py-3 bg-white">
      <div class="flex-1">
        <p class="text-xl font-semibold text-gray-900">
          {{ name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
}
</script>
