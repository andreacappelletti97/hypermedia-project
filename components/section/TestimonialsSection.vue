<template>
  <div class="px-8 pt-16 pb-20 bg-white sm:px-12 lg:pt-24 lg:pb-28 lg:px-16">
    <base-section-title
      title="Testimonials"
      subtitle="Testimonials endorsing the service offered by Rocket Inc."
    />

    <!-- List of testimonials -->
    <div class="flex flex-col gap-10 mt-10">
      <div
        v-for="tst in testimonials"
        :key="tst.id"
        class="flex flex-col gap-0 lg:flex-row"
      >
        <div
          class="flex-1 p-20 bg-cover border border-gray-200"
          :style="{ backgroundImage: `url(${tst.image_url})` }"
        />
        <div class="flex-1 p-5 border border-gray-200 lg:p-20 md:p-14">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            {{ tst.review_title }}
          </h2>
          <p class="mt-3 text-lg text-gray-700">{{ tst.review_content }}</p>
          <span class="inline-block mt-6 text-sm font-black text-gray-900">{{
            tst.name
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    testimonials: {
      type: Array,
      required: true,
    },
  },
})
</script>
